#!/bin/bash

# setup helpers
NORMAL='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'

debug() {
  if [[ $DEBUG -ne 0 ]]; then
    echo -e [${YELLOW}DEBG${NORMAL}] $1
  fi
}
ok() {
  echo -e "[${GREEN} OK ${NORMAL}]" $1
}
fail() {
  echo -e "[${RED}FAIL${NORMAL}]" $1
}
fatal() {
  echo -e [${RED}FATAL${NORMAL}] $1 "Exiting..."
  exit 2
}

new_migration() {
  DATE=`date +%s%3N`
  read -ep "Migration Name? ${DATE}_" SUBTITLE
  FOLDER="./hasura/migrations/default/${DATE}_${SUBTITLE}"
  if mkdir -p $FOLDER; then
    ok "created $FOLDER";
  else
    fatal "couldn't create folder $FOLDER";
  fi

  cat > $FOLDER/up.sql <<'EOF'
BEGIN;


-- Add your migration SQL here

COMMIT;
EOF

  if [ $? -eq 0 ]; then
    ok "created $FOLDER/up.sql";
  else
    fatal "couldn't create up.sql in $FOLDER"
  fi

  if touch $FOLDER/down.sql; then
    ok "created $FOLDER/down.sql"
  else
    fatal "couldn't create down.sql in $FOLDER"
  fi
}