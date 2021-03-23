SCRIPTPATH="$(
    cd "$(dirname "$0")" >/dev/null 2>&1
    pwd -P
)"
docker run -v "$SCRIPTPATH/specs":"/specs" eu.gcr.io/amedia-core/amedia/spec-lint:latest
