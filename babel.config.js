module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			"@babel/preset-env",
			"@babel/preset-react", //jsx를 일반 js코드로 바꿔줌
		],
		plugins: [],
	};
};
