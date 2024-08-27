const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx", // 파일을 찾기 시작하는 입구
	mode: "development", // 개발모드
	resolve: {
		extensions: [".js", ".jsx"],
		// import from 뒤에 확장자를 생략했을 때, 어떤 확장자가 올 수 있는지 알려줌
	},
	module: {
		rules: [
			{
				test: /.(js|jsx|tsx)$/, //js,jsx,tsx 형식에 맞는 파일을 찾음
				exclude: /node_modules/, //node_modules 폴더는 제외
				use: "babel-loader", // js와 jsx 파일을 가져오는 loader
			},
			{
				test: /.css$/, //css 형식에 맞는 파일을 찾음
				use: ["style-loader", "css-loader"], // css 파일을 가져오는 loader
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "dist"), // 번들이 만들어질 폴더 경로
		filename: "bundle.js", // 만들어질 번들 파일의 이름
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.html", //빌드된 JS파일을 넣을 html파일
			filename: "./index.html", //빌드될 html 파일 이름 지정
		}),
		new CopyPlugin({ patterns: [{ from: "public/assets", to: "assets/" }] }), // public 폴더의 내용을 dist폴더로 복사
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		host: "localhost",
		port: 3000,
	},
};
