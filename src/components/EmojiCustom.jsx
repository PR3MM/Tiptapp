import { Extension } from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'
import tippy from 'tippy.js'
import { ReactRenderer } from '@tiptap/react'
import React from 'react'

// Simple list of emojis
const emojiList = [
  { emoji: '😀', name: 'smile' },
  { emoji: '😂', name: 'joy' },
  { emoji: '🥰', name: 'love' },
  { emoji: '😎', name: 'cool' },
  { emoji: '😴', name: 'sleep' },
  { emoji: '🤔', name: 'think' },
  { emoji: '👍', name: 'thumbs up' },
  { emoji: '❤️', name: 'heart' },
]

// Simple emoji list component
const EmojiList = ({ items, command }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 max-h-60 overflow-y-auto">
      <div className="grid grid-cols-2 gap-1">
        {items.map((item) => (
          <button
            key={item.emoji}
            onClick={() => command({ emoji: item.emoji })}
            className="p-2 hover:bg-gray-100 rounded flex items-center gap-2"
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="text-sm text-gray-600">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const suggestion = {
  items: ({ query }) => {
    return emojiList.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  },

  render: () => {
    let component
    let popup

    return {
      onStart: (props) => {
        component = new ReactRenderer(EmojiList, {
          props,
          editor: props.editor,
        })

        // Make sure we have clientRect before creating popup
        if (!props.clientRect) {
          return
        }

        popup = tippy('body', {
          getReferenceClientRect: () => props.clientRect(),
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        })
      },

      onUpdate: (props) => {
        component.updateProps(props)

        // Update position if we have clientRect
        if (!props.clientRect) {
          return
        }

        popup[0].setProps({
          getReferenceClientRect: () => props.clientRect(),
        })
      },

      onKeyDown: (props) => {
        if (props.event.key === 'Escape') {
          popup[0].hide()
          return true
        }
        return false
      },

      onExit: () => {
        popup[0].destroy()
        component.destroy()
      },
    }
  },
}

const EmojiPickerExtension = Extension.create({
  name: 'emojiPicker',

  addOptions() {
    return {
      suggestion: {
        char: ':',
        command: ({ editor, range, props }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .insertContent(props.emoji)
            .run()
        },
      },
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
        ...suggestion,
      }),
    ]
  },
})

export default EmojiPickerExtension