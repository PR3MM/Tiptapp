import { Mark } from '@tiptap/core';

const EmojiMark = Mark.create({
  name: 'emoji',

  addAttributes() {
    return {
      emoji: {
        default: '',
        parseHTML: (element) => element.textContent,
        renderHTML: (attributes) => {
          return { 'data-emoji': attributes.emoji, class: 'emoji' };
        },
      },
    };
  },

  addCommands() {
    return {
      insertEmoji: (emoji) => ({ commands }) => {
        return commands.insertContent({ type: this.name, attrs: { emoji } });
      },
    };
  },
});

export default EmojiMark;
