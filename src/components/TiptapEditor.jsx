import React, { useState } from 'react';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import EmojiCustom from '../components/EmojiCustom';
import { Webpage } from '../components/WebpageCustom';

const TiptapEditor = () => {
  const [iframeSrc, setIframeSrc] = useState('https://www.x.com/'); 

  const editor = useEditor({
    extensions: [
      Document, 
      Paragraph, 
      Text, 
      StarterKit,
      TextStyle,
      Color,
      FontFamily,
      EmojiCustom,
      Webpage,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a basic <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you'd probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That's a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
    `,
    autofocus: true,
    editable: true,
    injectCSS: false,
  });

  const colorButtons = [
    { color: '#958DF1', label: 'Purple' },
    { color: '#F98181', label: 'Red' },
    { color: '#FBBC88', label: 'Orange' },
    { color: '#FAF594', label: 'Yellow' },
    { color: '#70CFF8', label: 'Blue' },
    { color: '#94FADB', label: 'Teal' },
    { color: '#B9F18D', label: 'Green' },
  ];

  const fontFamilies = [
    { name: 'Inter', label: 'Inter' },
    { name: 'Comic Sans MS, Comic Sans', label: 'Comic Sans' },
    { name: 'serif', label: 'Serif' },
    { name: 'monospace', label: 'Monospace' },
    { name: 'cursive', label: 'Cursive' },
  ];

  const handleChangeWebpage = () => {
    const newUrl = prompt('Enter the new webpage URL:', iframeSrc);
    if (newUrl) setIframeSrc(newUrl);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {editor && (
        <>
          

          <BubbleMenu editor={editor} tippyOptions={{ duration: 100, offset: [0, 20] }}>
            <div className="bg-gray-900 px-4 py-2 rounded-lg shadow-xl flex items-center gap-3 border border-gray-700">
              <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors ${
                  editor.isActive('bold') ? 'bg-gray-700 text-white' : 'text-gray-200'
                }`}
              >
                <strong>B</strong>
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors ${
                  editor.isActive('italic') ? 'bg-gray-700 text-white' : 'text-gray-200'
                }`}
              >
                <em>I</em>
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors ${
                  editor.isActive('strike') ? 'bg-gray-700 text-white' : 'text-gray-200'
                }`}
              >
                <del>S</del>
              </button>
            </div>
          </BubbleMenu>

          <div className="mb-4 p-4 bg-gray-100 rounded-lg space-y-4">
            <div className="flex flex-wrap gap-3 items-center border-b pb-3">
              <button 
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${editor.isActive('blockquote') ? 'bg-gray-700 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
              >
                Toggle Blockquote
              </button>
              <button 
                onClick={() => editor.chain().focus().setBlockquote().run()}
                disabled={!editor.can().setBlockquote()}
                className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-300 hover:bg-gray-400 transition-colors"
              >
                Set Blockquote
              </button>
              <button  
                onClick={() => editor.chain().focus().unsetBlockquote().run()}
                disabled={!editor.can().unsetBlockquote()}
                className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-300 hover:bg-gray-400 transition-colors"
              >
                Unset Blockquote
              </button>
            </div>

            {/* Font Family Controls */}
            <div className="flex flex-wrap gap-3 items-center border-b pb-3">
              <span className="text-sm font-medium text-gray-700">Font:</span>
              {fontFamilies.map(({ name, label }) => (
                <button
                  key={name}
                  onClick={() => editor.chain().focus().setFontFamily(name).run()}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${editor.isActive('textStyle', { fontFamily: name }) ? 'bg-gray-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  style={{ fontFamily: name }}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => editor.chain().focus().unsetFontFamily().run()}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                Clear Font
              </button>
            </div>

            {/* Color Controls */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm font-medium text-gray-700">Color:</span>
              <input
                type="color"
                onInput={event => editor.chain().focus().setColor(event.target.value).run()}
                value={editor.getAttributes('textStyle').color || '#000000'}
                className="w-8 h-8 rounded cursor-pointer"
              />
              
              {colorButtons.map(({ color, label }) => (
                <button
                  key={color}
                  onClick={() => editor.chain().focus().setColor(color).run()}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    editor.isActive('textStyle', { color }) 
                      ? 'ring-2 ring-offset-2 ring-gray-400' 
                      : 'hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'
                  }`}
                  style={{
                    backgroundColor: color,
                    color: isLightColor(color) ? '#000' : '#fff'
                  }}
                >
                  {label}
                </button>
              ))}
              
              <button
                onClick={() => editor.chain().focus().unsetColor().run()}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                Clear Color
              </button>
            </div>
            
          </div>

          <div className="border rounded-lg shadow-sm">
            {/* Iframe displaying the webpage */}
          <div className="mb-4 p-4  rounded-lg">
            <iframe 
              src={iframeSrc} 
              width="100%" 
              height="400px" 
              title="Webpage" 
              frameBorder="0"
              className="rounded-lg shadow-lg"
            />
            <button 
              onClick={handleChangeWebpage}
              className="mt-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Change Webpage
            </button>
          </div>
            <EditorContent 
              editor={editor} 
              className="prose max-w-none min-h-[300px] p-4 focus:outline-none" 
              
            />
          </div>
        </>
      )}
    </div>
  );
};

const isLightColor = (color) => {
  const [r, g, b] = hexToRgb(color);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b);
  return luminance > 128;
};

const hexToRgb = (hex) => {
  const result = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : [0, 0, 0];
};

export default TiptapEditor;
