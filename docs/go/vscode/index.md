# Go 安装
:::tip 需求
1. 下载vscode
2. 下载go，配置环境
3. 配置vscode
:::
-----------------------------------------
下载VS Code https://code.visualstudio.com/

下载Golang https://golang.org/dl/

-----------------------------------------
mac打开dmg文件，一路next，在terminal上输入下面，查看是否成功
```language
go version
```
- **GoRoot：**
	> go在mac上默认被下载到路径 /usr/local/go 中，这个路径也叫goroot，表示go被安装的路径。
- **GoPath：**
	>	go的工作目录，在这个目录进行编译、链接最后生成所需要的库、可执行文件，一般是我们的项目所在地。我的gopath设置为 /Users/apple/go 。

- **设置gopath**

```language
go env -w GOPATH=/Users/apple/go
```
- **设置goMod状态，goMod google**
```language
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```
# VScode安装配置
下载go插件

在gopath目录下，创建src文件作为项目根目录，假设创建hello项目，hello项目中有文件hello.go，文件目录：
`/Users/apple/go/src/github/hello/hello.go`

hello.go内容
```language
package main
import "fmt"
func main() {
    fmt.Println("hello world")
}
```
在目录 /Users/apple/go/github/src/hello 输入以下，相当于项目hello初始化一个项目依赖管理器。
```language
go mod init
go mod tidy
```

最后vscode中打开这个hello.go运行，或者在terminal下hello文件目录运行下面命令，都可得到hello world。
```language
go run hello.go
```

设置vscode运行快捷键安装code runner插件，安装后可以快捷键run代码，或者右键code runner。

visual-studio-code - 摆脱下划线(链接)
`"editor.links": false`