# Generate HTML templates from protobuf

Somewhat cool ! Right ? Checkout the examples: [https://azr.github.io/protoc-gen-htmltemplate/](https://azr.github.io/protoc-gen-htmltemplate/)

## What is this doing ?

Every time you change a type: the html code for displaying it is generated according to fields.

* For form it generates `<input>` fields surrounded by bootstrap form divs. Profile.ID example:

```
<div class="form-group Profile">
  <label for="ID">ID</label>
  <input class="form-control ID" id="ID" name="ID" type=number step=1 value="{{ID}}" >
</div>
```
* For table headers, `<th>FieldName</th>` are generated.
* For table content, `<td>{{FieldName}}</td>` are generated.

Check the .js files in the example dir to see the generated code.

## Installation

run `go get github.com/azr/protoc-gen-htmltemplate`
If your golang is correctly set up you will now have the command `protoc-gen-htmltemplate`.
If it's the case, then installation went fine.

## Usage

```
protoc  protos/*.proto \
	--htmltemplate_out=${ADMIN_DIR}/templates/
```

## To use them now ?

Checkout the [example](https://azr.github.io/protoc-gen-htmltemplate/) !

This line particularly:

```
var userFormRendered = Mustache.render( templates.Profile.form, {ID: 42}, templates.Profile.formIncludes() );
$("#user-form").html(userFormRendered);
```

## Limitations

The golang generation code is quick and dirty and the generated js is pretty simple.

* There can be only one level of nesting for a type
* bytes and groups are ignored
* only tested with proto3

## Why this project ?

I define a lot of things using gRPC.
I don't like doing nor maintaining html/javascript/css & I need an admin console that is
mostly made of replaceable tools.
So I figured generating the most I could from the actual protobuf would make
my life much better and easier.
It's easy to generate communication and entity files in js from protobuf to execute CRUD.
Now I just need to tie things together.

## Choices

I still had to make some choice though. The project
has to be hype resistant and generate boilerplate code so it
never gets in the way, or the least possible.


-> Searched "best template engine" and got mustache.github.io

-> Searched "best css framework" and got getbootstrap.com

So the code generated is mustache templates files
Forms have bootstrap 4 structure and class names.
Every entity has it's own class name taken from entity/field name itself too.


## Want to contribute ?

PRs are welcome !

## Why is it done in golang ?

The go library for parsing protobuf is maintained by someone else.
This library allows me to just decide how things are dumped and not care about parsing.

## What's gRPC & protobuf ?

In short: from a .proto file defining your entity and API calls, 
generate the code that will do the communication
in any language you like: js, go, c++, c#, java, python, [etc.](https://github.com/google/protobuf/blob/master/docs/third_party.md)

## Can I edit the generated files afterwards ?

Yeah but next time you run the command the files will be replaced.

## Links

[golang/protobuf](https://github.com/golang/protobuf/)
