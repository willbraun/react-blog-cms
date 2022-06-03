import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainPost from './components/MainPost';
import './App.css';

function App() {
  
	const DATA = [
		{id: 1, title: 'Blog Post 1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta soluta optio tempore iusto ab consequuntur obcaecati repellat! Veniam, expedita beatae neque recusandae pariatur quidem sit quod! Voluptatum, libero cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem tempora neque officiis beatae iste nesciunt delectus et similique. Ipsa magni placeat quae vitae eius, ipsum quas fugit distinctio nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, delectus fuga rerum inventore ipsam sit soluta officia in adipisci sequi ex quasi natus impedit. Consectetur, assumenda sit? Quae, voluptate laboriosam.'},
		{id: 2, title: 'Blog Post 2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fuga nostrum nobis deleniti, modi commodi rerum soluta hic voluptates explicabo, officia a molestias sed error beatae voluptate nemo animi quo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aliquid nesciunt deleniti reprehenderit alias rerum, officia ratione voluptas, maiores dolorum doloribus facere molestiae fuga atque ut. Debitis totam quidem laborum lorem laborum lorem'},
		{id: 3, title: 'Blog Post 3', body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci commodi quas nulla obcaecati earum excepturi explicabo ipsam rerum, omnis sit fugiat debitis accusamus odio tenetur cumque recusandae? Aliquam, tempore cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam praesentium animi facilis, aliquam numquam qui accusamus eos? Fuga quidem voluptatibus quae dolorem sint, perferendis iure ipsam sit exercitationem provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero officia voluptates quis saepe ex quos tenetur dolores maxime dolorum ipsam. Debitis officiis corrupti fuga nulla, quae doloremque ut numquam? Quis!'},
		{id: 4, title: 'Blog Post 4', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero non esse a, molestias ut quasi autem delectus sapiente culpa dignissimos architecto expedita placeat nam cum labore nulla. Saepe, hic aperiam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum vel voluptate, alias, quae deleniti omnis deserunt aperiam perspiciatis commodi fuga et architecto? Odit molestiae beatae nisi laudantium sunt minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque aut animi ducimus sed vitae adipisci vel a dolore exercitationem recusandae odio quaerat placeat tenetur, tempore nisi sequi ipsum officia aspernatur.'},
	]

	const [state, setState] = useState({
		posts: DATA,
		selection: DATA[0],
		uid: 5,
		isEditing: false
	})

	const noPosts = {id: 0, title: 'No blog posts. Add one!', body: ''};

	const selectItem = selected => {
		setState({...state, selection: selected, isEditing: false});
	}

	const addPost = addedPost => {
		const newList = state.posts;
		newList.push(addedPost);
		setState({posts: newList, selection: addedPost, uid: state.uid + 1, isEditing: false});
	}

	const deletePost = id => {
		const newList = state.posts;
		const index = newList.findIndex(post => post.id === id);
		newList.splice(index, 1);
		setState({...state, posts: newList, selection: state.posts[0] ? state.posts[0] : noPosts});
	}

	const editPost = (id, newTitle, newBody) => {
		const newList = state.posts;
		const index = newList.findIndex(post => post.id === id);
		newList[index] = {id: id, title: newTitle, body: newBody}
		setState({...state, posts: newList, selection: newList[index], isEditing: false});
	}

	const setIsEditing = bool => {
		setState({...state, isEditing: bool})
	}
  
  	return (
    	<div className="App">
			<Sidebar state={state} selectItem={selectItem} addPost={addPost}/>
			<MainPost state={state} setIsEditing={setIsEditing} editPost={editPost} deletePost={deletePost}/>
    	</div>
  	);
}

export default App;
