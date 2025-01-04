import { mergeAttributes, Node } from '@tiptap/core';

export const Webpage = Node.create({
  name: 'webpage',

  addOptions() {
    return {
      inline: false,
      width: 640,
      height: 480,
      defaultUrl: 'https://www.google.com', // Default to Google if no URL is provided
      HTMLAttributes: {},
    };
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? 'inline' : 'block';
  },

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: this.options.defaultUrl, // Default source URL (Google)
      },
      width: {
        default: this.options.width,
      },
      height: {
        default: this.options.height,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-webpage] iframe',
      },
    ];
  },

  addCommands() {
    return {
      setWebpage: ({ src, width = this.options.width, height = this.options.height }) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: { src, width, height },
        });
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      { 'data-webpage': '' },
      [
        'iframe',
        mergeAttributes(
          this.options.HTMLAttributes,
          {
            width: HTMLAttributes.width,
            height: HTMLAttributes.height,
            allowfullscreen: true,
          },
          HTMLAttributes
        ),
      ],
    ];
  },
});
