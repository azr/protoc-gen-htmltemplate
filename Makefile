PROTO_DIR=example

all:
	go install . && protoc -I${PROTO_DIR} ${PROTO_DIR}/*.proto \
		--htmltemplate_out=${PROTO_DIR}
