#!/bin/bash
set -o nounset
set -o errexit

folderName=$1
fileName=$(echo $1 | sed 's/-/./g')

mkdir -p src/$folderName
touch src/$folderName/$fileName.ts || exit
touch src/$folderName/$fileName.spec.ts || exit
cat <<EOF > src/$folderName/README.md
# <<ADD HEADER>>

## Description

tba

### Example

tba

### Difficulty

easy|medium|hard
EOF
