// Html support for Protocol Buffers - Google's data interchange format
//
// protoc-gen-htmltemplate is a plugin for the Google protocol buffer compiler to generate
// html template files. Run it by building this program and putting it in your path with
// the name
// 	protoc-gen-htmltemplate
// That word 'htmltemplate' at the end becomes part of the option string set for the
// protocol compiler, so once the protocol compiler (protoc) is installed
// you can run
// 	protoc --htmltemplate_out=output_directory input_directory/file.proto
// to generate bindings for the protocol defined by file.proto.
// With that input, the output will be written to
// 	output_directory/file.pb.moustache.html
//
// The generated code is documented in the package comment for
// the library.
//
// See the README and documentation for protocol buffers to learn more:
// 	https://developers.google.com/protocol-buffers/
package main

import (
	"io/ioutil"
	"os"

	"github.com/azr/protoc-gen-htmltemplate/generator"
	"github.com/golang/protobuf/proto"
)

func main() {

	g := generator.New()

	data, err := ioutil.ReadAll(os.Stdin)
	if err != nil {
		g.Error(err, "reading input")
	}

	if err := proto.Unmarshal(data, g.Request); err != nil {
		g.Error(err, "parsing input proto")
	}

	if len(g.Request.FileToGenerate) == 0 {
		g.Fail("no files to generate")
	}

	g.GenerateAllFiles()

	// Send back the results.
	data, err = proto.Marshal(g.Response)
	if err != nil {
		g.Error(err, "failed to marshal output proto")
	}
	_, err = os.Stdout.Write(data)
	if err != nil {
		g.Error(err, "failed to write output proto")
	}
}
