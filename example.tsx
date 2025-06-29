
console.log(<>
  {/* Basic text formatting */}
  <p>
    test paragraph
    <p>
      test inner paragraph
    </p>
  </p>
  <i>italic</i>\n
  <u>underline</u>\n
  <s>strikethrough</s>\n

  {/* Nested formatting */}
  <b>
    bold <i>italic bold <s>italic bold strikethrough <spoiler>italic bold strikethrough spoiler</spoiler></s> <u>underline italic bold</u></i> bold
  </b>\n

  {/* Links */}
  <a href="http://www.example.com/">inline URL</a>\n
  <mention id={123456789}>inline mention of a user</mention>\n

  {/* Special elements */}
  <emoji id="5368324170671202286">👍</emoji>\n
  <code>inline fixed-width code</code>\n
  <pre>pre-formatted fixed-width code block</pre>\n
  <pre lang="python">pre-formatted fixed-width code block written in the Python programming language</pre>\n

  {/* Block quotes */}
  <blockquote>
    Block quotation started\n
    Block quotation continued\n
    The last line of the block quotation
  </blockquote>\n
  <blockquote expandable>
    Expandable block quotation started\n
    Expandable block quotation continued\n
    Expandable block quotation continued\n
    Hidden by default part of the block quotation started\n
    Expandable block quotation continued\n
    The last line of the block quotation
  </blockquote>\n

  {/* Example of message reference */}
  <message chat={-1001234567890} message={42}>
    Referenced message
  </message>
</>)
