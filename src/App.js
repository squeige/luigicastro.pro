import React, {useState} from 'react';
import Header from './components/header/header.cmp';
import Bio from './components/bio/bio.cmp';
import Footer from './components/footer/footer.cmp';
import './App.css';


function App() {
	const [isDark, setIsDark] = useState(false);

	const toggleDarkMode = () => {
		setIsDark(!isDark);
	}

	return (
		<div className={isDark ? 'App dark' : 'App'}>
			<Header isDark={isDark} toggleDarkMode={toggleDarkMode}/>
			<Bio isDark={isDark} />
			<Footer isDark={isDark} />
		</div>
	)
}

export default App;
