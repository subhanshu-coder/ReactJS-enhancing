// Textarea
// The textarea element in React is slightly different from ordinary HTML.

// In HTML the value of a textarea is the text between the start tag <textarea> and the end tag </textarea>.
<textarea>
  Content of the textarea.
</textarea>

import { createRoot } from 'react-dom/client'
import { useState } from 'react'

function MyForm() {
  const [mytxt, setMytxt] = useState("");

  function handleChange(e) {
    setMytxt(e.target.value);
  }