upload:
	brew ls --versions imageoptim-cli || brew install imageoptim-cli
	sips -Z 1600 ./s3-uploads/input/*.{png,jpg}
	imageoptim ./s3-uploads/input/*.jpg
	imageoptim ./s3-uploads/input/*.png
	aws s3 cp ./s3-uploads/input/ s3://pg-image-host/thepg/screens/ --recursive --acl public-read
	ls ./s3-uploads/input/ | sed -E 's|(.*)\.([^.]*$$)|export const \1 = "https://s3.amazonaws.com/pg-image-host/thepg/screens/\1.\2";|g' >> ./s3-uploads/index.js
	mv ./s3-uploads/input/*.png ./s3-uploads/processed/
	mv ./s3-uploads/input/*.jpg ./s3-uploads/processed/
