FROM slatedocs/slate

ENV DOC_BASE_FOLDER=${DOC_BASE_FOLDER:-"/usr/src/doc"}
ENV DOC_OUTPUT_FOLDER=${DOC_OUTPUT_FOLDER:-"/usr/src/output"}

RUN rm -rf /srv/slate/source/**/*

COPY build_api_docs.sh /usr/src/scripts/build_api_docs.sh
ENTRYPOINT [ "sh", "/usr/src/scripts/build_api_docs.sh" ]