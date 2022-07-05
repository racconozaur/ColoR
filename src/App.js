import React, {useEffect, useMemo, useState} from 'react'
import PaleteService from './components/API/PaleteService';
import MyHeader from './components/Header/MyHeader';
import PaleteItem from './components/paleteItem/PaleteItem';
import PaleteList from './components/paleteList/PaleteList';
import PostForm from './components/postForm/PostForm';
import MyButton from './components/UI/button/MyButton';
import { useFetching } from './hooks/useFetching';
import './styles/app.css'


function App() {

	const [palete, setPalete] = useState([])
	const [fetching, isLoading, error] = useFetching(async() => {
		const palete = await PaleteService.getAll();
		setPalete(palete)
	})

	useEffect(() => {
		fetching()
	}, [])



  return (
	
    <div>
		<header>
			<MyHeader/>
		</header>
		<section className='colors mainfs flex'>
			
			{error && 
				<h1>Error found in ${error}</h1>
			}
			
			{isLoading
				?<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>loading</div>
				:<PaleteList palete={palete}/>
			}
			<PostForm/>
		</section>
    </div>
  );
}

export default App;
