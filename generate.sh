#!/bin/bash

# Generate Client
rm src docs test -rf
openapi-generator-cli generate \
-g javascript \
--additional-properties=projectName=vrchatapi,usePromises=true,moduleName=vrchatapi \
--git-user-id=vrchatapi \
--git-repo-id=vrchatapi-node \
-o . \
-i ../specification/openapi.yaml \
--http-user-agent="vrchatapi-node"

# Remove unwanted lines from README
sed -i '/Uncomment the following line to set a prefix/d' ./README.md
sed -i '/apiKeyPrefix/d' ./README.md
sed -i '/Uncomment the following line to set a prefix/d' ./docs/*.md
sed -i '/apiKeyPrefix/d' ./docs/*.md
sed -i 's/api.deleteUserById/api.getUser/g' ./README.md