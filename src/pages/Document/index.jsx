import logo from 'icons/logo.svg'
import {
  Typography,
  CodeSpace,
  Button,
  Header,
  Card,
  Input,
  Table,
} from 'components'
import { useEffect } from 'react'

const Document = () => {
  useEffect(() => {
    document.title = 'Lumina Design | Deocument'
  }, [])

  return (
    <div>
      <CodeSpace title="排版">
        <Typography>
          <h1>Deocument | Component Demo</h1>
          <p>
            我们认为段落中的一行最大宽度应该被限制，过宽的行容易阅读疲劳。我们认为段落中的一行最大宽度应该被限制，过宽的行容易阅读疲劳。我们认为段落中的一行最大宽度应该被限制，过宽的行容易阅读疲劳。我们认为段落中的一行最大宽度应该被限制，过宽的行容易阅读疲劳。
          </p>
        </Typography>
      </CodeSpace>

      <CodeSpace title="表格">
        <Table></Table>
      </CodeSpace>

      <CodeSpace title="表单控件">
        <Input type="text" placeholder="提示内容" />
      </CodeSpace>

      <CodeSpace title="按钮">
        <Button>默认按钮</Button>
        <Button type="text">文字按钮</Button>
        <Button type="link">链接按钮</Button>
        <Button
          type="icon"
          href="https://img1.imgtp.com/2023/06/06/fnnGZFJf.svg"
        />
      </CodeSpace>

      <CodeSpace title="卡片">
        <Card title="Card" extra={<a href="#卡片">More</a>}>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </Card>
      </CodeSpace>

      <CodeSpace title="顶栏">
        <Header title="Title" logo={logo}>
          Children Content
        </Header>
      </CodeSpace>
    </div>
  )
}

export default Document
