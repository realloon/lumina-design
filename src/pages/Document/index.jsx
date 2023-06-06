import { Typography, CodeSpace, Button } from 'components'
import { useEffect } from 'react'

const Document = () => {
  useEffect(() => {
    document.title = 'Lumina Design | Deocument'
  }, [])

  return (
    <Typography>
      <h1>Deocument | Component Demo</h1>
      <p>
        我们认为段落中的一行最大宽度应该被限制，过宽的行容易阅读疲劳。我们认为段落中的一行最大宽度应该被限制，过宽的行容易阅读疲劳。我们认为段落中的一行最大宽度应该被限制，过宽的行容易阅读疲劳。我们认为段落中的一行最大宽度应该被限制，过宽的行容易阅读疲劳。
      </p>

      <CodeSpace title="按钮">
        <Button>默认按钮</Button>
        <Button type="text">文字按钮</Button>
        <Button type="link">链接按钮</Button>
        <Button
          type="icon"
          href="https://img1.imgtp.com/2023/06/06/fnnGZFJf.svg"
        />
      </CodeSpace>
    </Typography>
  )
}

export default Document
