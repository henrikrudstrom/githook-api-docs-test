echo "running slatedocs"
echo "base folder ${DOC_BASE_FOLDER}"
echo "output folder ${DOC_OUTPUT_FOLDER}"
echo "pwd: $(pwd)"

WORKDIR=$(pwd)
cp -r $DOC_BASE_FOLDER/* /srv/slate/source
cd /srv/slate
/srv/slate/slate.sh build
cd $WORKDIR
mkdir -p $DOC_OUTPUT_FOLDER
cp -r /srv/slate/build/* $DOC_OUTPUT_FOLDER
