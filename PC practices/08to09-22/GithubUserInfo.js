import React, { Component } from 'react'
import axios from 'axios';
import './GithubUserInfo.css'
import Search from './Search';
 class GithubUserInfo extends Component {
    static defaultProps={
        username:''
    }
    constructor(props){
        super(props);
        this.state={theName:'',imgUrl:'',name:'',bio:'',followers:'',githuburl:'',lastUpdate:''};
        this.changeName=this.changeName.bind(this)
        
    }
    async componentDidMount(){
        let newusername=Object.values(this.state.theName)
        console.log(newusername)
        let url=`https://api.github.com/users/${newusername}`;
        let response=await axios.get(url)
        let data=response.data;
        console.log(this.state.theName)
        this.setState({imgUrl:data.avatar_url,name:data.name,bio:data.bio,followers:data.followers,githuburl:data.url,lastUpdate:data.updated_at})
    }
    changeName(newname){
        this.setState({
            theName:newname
        })
     
    }
  render() {
    return (

      <div className='div'>
        <h1>
            GithubUser:{this.state.name}
        </h1>
        <img src={this.state.imgUrl}/>
        <p>Bio:{this.state.bio}</p>
        <p>Followers:{this.state.followers}</p>
        <p>GithubUrl:{this.state.githuburl}</p>
        <p>LastUpdatedProfile:{this.state.lastUpdate}</p>
        <Search changeName={this.changeName}/>
        
      </div>
      
    )
  }
}

export default GithubUserInfo
