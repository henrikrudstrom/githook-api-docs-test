# Slate-docs-action

generates slatedocs using the slatedocs/slate image

to test locally, first build the image:

```sh
docker build . -t slatedocs-action
```

then from the root of this repo run:

```sh
docker run -e DOC_BASE_FOLDER='./api-docs/source' -e DOC_OUTPUT_FOLDER='./output' -v $(pwd):/wd --workdir=/wd slatedocs-action:latest
```
