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


const contentx = `<h1>Welcome to the Tiptap Editor Demo 🎉</h1>
<p>This document demonstrates how to use <strong>all the features</strong> available in the editor. Follow along and try them out!</p>

<h2>Headings</h2>
<p>Type <code>#</code> at the beginning of a new line and it will magically transform into a heading, same for <code>##</code>, <code>###</code>, <code>####</code>, <code>#####</code>, and <code>######</code>.</p>
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>

<h2>Horizontal Rule</h2>
<p>Use this extension to render an <code>&lt;hr&gt;</code> HTML tag.</p>
<p>Type three dashes (<code>---</code>) or three underscores and a space (<code>___ </code>) at the beginning of a new line and it will magically transform into a horizontal rule.</p>
<hr />

<h2>Text and Marks</h2>
<h3>Bold</h3>
<p>Type <code>**two asterisks**</code> or <code>__two underlines__</code> and it will magically transform into bold text while you type.</p>
<p><strong>This is bold text.</strong></p>

<h3>Italic</h3>
<p>Type <code>*one asterisk*</code> or <code>_one underline_</code> and it will magically transform into italic text while you type.</p>
<p><em>This is italic text.</em></p>

<h3>Strikethrough</h3>
<p>Type <code>~~ text between tildes ~~</code> and it will magically strike through while you type.</p>
<p><s>This is striked-through text.</s></p>

<h3>Code</h3>
<p>Type something with <code>&#96;back-ticks around&#96;</code> and it will magically transform into inline code while you type.</p>
<p><code>This is inline code.</code></p>

<h2>Lists</h2>
<h3>Bullet List</h3>
<ul>
  <li>Item 1</li>
  <li>Item 2
    <ul>
      <li>Nested Item 2.1</li>
      <li>Nested Item 2.2</li>
    </ul>
  </li>
</ul>

<h3>Ordered List</h3>
<ol>
  <li>First Item</li>
  <li>Second Item
    <ol>
      <li>Sub Item 2.1</li>
      <li>Sub Item 2.2</li>
    </ol>
  </li>
</ol>

<h2>Blockquote</h2>
<blockquote>
  <p>This is a blockquote.<br />Select this text and toggle or unset blockquote using the bubble menu or toolbar.</p>
</blockquote>

<h2>Code Block</h2>
<pre><code>// This is a code block.
function greet(name) {
  return 'Hello, ' + name + '!';
}
</code></pre> 

<h2>Extensions</h2>
<p>Try using drop cursors and gap cursors while interacting with content.</p>

 <h2>Important Extensions</h2>


  <h3>Blockquote</h3>
  <p>
    - <strong>Toggle Blockquote:</strong> Use this button to switch between a blockquote and regular text.<br />
    - <strong>Set Blockquote:</strong> Highlight your text and click this button to format it as a blockquote.<br />
    - <strong>Unset Blockquote:</strong> Removes the blockquote formatting from your text.
    <h5> <strong>Buttons are available above the editor</strong></h5>
  </p>

  <h3>Font Changer</h3>
  <p>
    Buttons above the editor allow you to change the font of the selected text. Available options include:
    
        Inter,
        Comic Sans,
        Serif,
        Monospace,
        Cursive,
       Clear Font   Reverts to the default font.
    
    <h5> <strong>Buttons are available above the editor</strong></h5>

  </p>

  <h3>Color Changer</h3>
  
    Buttons above the editor let you apply or remove text colors. Available options include:
  
    <span >Purple,</span>
    <span >Red,</span>
    <span >Orange,</span>
    <span >Yellow,</span>
    <span >Blue,</span>
    <span >Teal,</span>
    <span >Green,</span>
    Clear Color: Removes any applied color.
    
    <h5> <strong>Buttons are available above the editor</strong></h5>


  <h3>Bubble Menu</h3>
  <p>
    When you select text, a floating bubble menu appears with the following options:
    <ul>
      <li><strong>Bold:</strong> Makes the selected text bold.</li>
      <li><strong>Italic:</strong> Applies italic formatting to the selected text.</li>
      <li><strong>Strikethrough:</strong> Strikes through the selected text.</li>
    </ul>
  </p>

  <h2>Custom Extensions</h2>
<h3>Emoji Pop-Up</h3>
  <p>
    When you type <code>:</code>, a small popup appears, allowing you to select emojis. Select through the options to quickly add an emoji to your text!
  </p>

  <h3>Webpage Embedding</h3>
  <p>
    Below the editor, you can see an embedded webpage. This extension allows you to embed interactive content directly. The embedded website is:
    <a href="https://www.pexels.com/search/India/" target="_blank">Pexels </a>. You can interact with this webpage, browse images, and explore the content.

  
  </p>

  

`;

const TiptapEditor = () => {
  const [iframeSrc, setIframeSrc] = useState('https://www.pexels.com/search/India/');

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
    content: contentx,
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
                className={`px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors ${editor.isActive('bold') ? 'bg-gray-700 text-white' : 'text-gray-200'
                  }`}
              >
                <strong>B</strong>
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors ${editor.isActive('italic') ? 'bg-gray-700 text-white' : 'text-gray-200'
                  }`}
              >
                <em>I</em>
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-colors ${editor.isActive('strike') ? 'bg-gray-700 text-white' : 'text-gray-200'
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${editor.isActive('textStyle', { color })
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

            <EditorContent
              editor={editor}
              className="prose max-w-none min-h-[300px] p-4 focus:outline-none"

            />
          </div>


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
