import ReactDOM from "react-dom";
import React from "react";

function App() {
	const name = "Songgom";

	return <h1>Hello {name}</h1>;
	//이게 바벨 후엔 React.createElement("h1", null, "Hello Songgom") 이렇게 바뀜
}

ReactDOM.render(<App />, document.getElementById("app"));
//위의 ./public/index.html에 있는 app 이라는 id를 가진 div를 가져와서, App 함수에 적힌 내용(Hello Songgom)을 그려줄 것임
