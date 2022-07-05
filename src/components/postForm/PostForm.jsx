import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MyButton from '../UI/button/MyButton';
import './postForm.css'

const PostForm = () => {

	const [paleteColors, setPaleteColors] = useState({c0:'', c1:'',c2:'',c3:''})

	const postData = async (url, data) => {
		const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        }); 

		return await res.json();
	}

	const postPalete = (e) => {
		// eslint-disable-next-line eqeqeq
		if(paleteColors.c0 =='' || paleteColors.c1 =='' || paleteColors.c2 =='' || paleteColors.c3 ==''){
			console.log('enter the value');
		}
		else{
			console.log(paleteColors);
			const json = JSON.stringify(paleteColors)
			postData('http://localhost:3000/colors', json)
			.then(data => {
				console.log(data);
			}).catch(() => {
				console.log('smth went wrong');
			}).finally(() => {
				setPaleteColors({c0:'', c1:'',c2:'',c3:''})
			})
		}
		console.log(paleteColors);
		const jsons = JSON.stringify(paleteColors)
		console.log(jsons);
		
		
		
			
	}


	

	return (
		<div className='right'>
			<form >
				<label for="fname" className="input__txt" >First color:</label>
                <input type="text" name="c0" className="ic1 style__bar" required 
					onChange={e => setPaleteColors({...paleteColors, c0: e.target.value})}
				/>
                <label for="lname" className="input__txt">Second color:</label>
                <input type="text" name="c1" className="ic2 style__bar" required
					onChange={e => setPaleteColors({...paleteColors, c1: e.target.value})}
				/>
                <label for="fname" className="input__txt">Third color:</label>
                <input type="text" name="c2" className="ic3 style__bar" required
					onChange={e => setPaleteColors({...paleteColors, c2: e.target.value})}
				/>
                <label for="lname" className="input__txt">Fourth color:</label>
                <input type="text" name="c3" className="ic4 style__bar" required
					onChange={e => setPaleteColors({...paleteColors, c3: e.target.value})}
				/>
                <MyButton onClick={postPalete}>Publish</MyButton>
			</form>
		</div>
	);
};

export default PostForm;