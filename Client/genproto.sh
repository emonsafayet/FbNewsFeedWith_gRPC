PROTOC_GEN_TS_PATH="E:/Projects/GRPC/FbNewsFeedWith_gRPC/Client/node_modules/.bin/protoc-gen-ts.cmd"
PROTOC_OUT_DIR="./proto/generated"
mkdir -p ${PROTOC_OUT_DIR}
.\\protoc \
       --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
       --js_out="import_style=commonjs,binary:${PROTOC_OUT_DIR}" \
       --ts_out="service=grpc-web:${PROTOC_OUT_DIR}" \
       proto/user.proto

# if you are create a new proto file you should follow below steps
       # Step 1: Create proto file (Like user.proto)
       # Step 2: Chnage proto/{{fileName.proto}} (Ex: proto/user.proto)
       # Step3 : execute command : ./genproto.sh