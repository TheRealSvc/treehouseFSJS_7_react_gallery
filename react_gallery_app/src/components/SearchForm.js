import React, { Component } from 'react';

class SearchForm extends Component {    
  
  // Initializes a Default searchTopic using a "controlled component" pattern (https://reactjs.org/docs/forms.html#controlled-components)
  constructor(props) {
    super(props);
    this.state = {searchTopic: '',
                  path: '/' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {searchTopic: "forests"};

// fetch imgaes using fetch api 
  fetchImages = (searchTopic) => {
    // ToDo replace api key by prop
    let url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=bb7980f0ad50ca47d1b83d0f338862b3&text=${searchTopic}&per_page=20&format=json&nojsoncallback=1`
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
    };
  
  // handles new searchTopics as requested by user input 
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( prevState => {
        return {
          searchTopic: e.target.value,
          path: `/${e.target.value}`
        };
      });
  }

  handleChange(e) {
    this.setState({searchTopic: e.target.value, 
    path:`/${e.target.value}`});
    this.props.history.push(`/${e.target.value}`); 
  }

  render() {
    return (
        <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" name="search" placeholder="Search" required  value={this.state.searchTopic} onChange={this.handleChange}/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>);
  }
}

export default SearchForm;


/*
https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=bb7980f0ad50ca47d1b83d0f338862b3&text=cats&per_page=20&format=json&nojsoncallback=1
{ "photos": { "page": 1, "pages": "12050", "perpage": 20, "total": "240995", 
    "photo": [
      { "id": "51156408855", "owner": "191864343@N06", "secret": "78b6a67c91", "server": "65535", "farm": 66, "title": "cat white", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51155299121", "owner": "41497096@N07", "secret": "284aeabd54", "server": "65535", "farm": 66, "title": "ALI CAT Approaching Gourock", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51155532403", "owner": "41497096@N07", "secret": "a006bffe67", "server": "65535", "farm": 66, "title": "ALI CAT Heading for Dunoon", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51154629097", "owner": "27889738@N07", "secret": "cbe4d742a9", "server": "65535", "farm": 66, "title": "Tokyu Setagaya Line 300 Series Maneki-Neko Wrapping Back in 2019 May: 7", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51154628717", "owner": "41497096@N07", "secret": "ef017c6177", "server": "65535", "farm": 66, "title": "Ali CAT Approaching Gourock", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51155294861", "owner": "191864343@N06", "secret": "7a3390b8d6", "server": "65535", "farm": 66, "title": "cat eyes", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51156081109", "owner": "192936494@N06", "secret": "61ebf15845", "server": "65535", "farm": 66, "title": "20201024_122051", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51154623197", "owner": "192936494@N06", "secret": "f340b6df41", "server": "65535", "farm": 66, "title": "20200802_190446", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51156397455", "owner": "192936494@N06", "secret": "c7f1456690", "server": "65535", "farm": 66, "title": "20200802_190440", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51156393190", "owner": "192936494@N06", "secret": "7640ef405a", "server": "65535", "farm": 66, "title": "20200802_190153", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51155506428", "owner": "191578136@N02", "secret": "2750d15f29", "server": "65535", "farm": 66, "title": "Far Cry", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51155515448", "owner": "192936494@N06", "secret": "5bc8f783da", "server": "65535", "farm": 66, "title": "IMG_3725", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51156067229", "owner": "66855284@N03", "secret": "c7f96f4d4c", "server": "65535", "farm": 66, "title": "Woody the Cat 2008 08 15 15", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51154609922", "owner": "31029248@N00", "secret": "3e1241185f", "server": "65535", "farm": 66, "title": "Mon Titi est à l'hôpital depuis vendredi, je le récupère jeudi. Ses reins sont endommagés, on va tout faire pour bien le soigner. #Rouen #nofilter #cats #catinlove #cat #tabby #chat #instacat #catinstagram #catstagram #catsofinstagram #cats #catinlove #gi", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51155268711", "owner": "192936494@N06", "secret": "7b5437df08", "server": "65535", "farm": 66, "title": "IMG_2878", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51156377230", "owner": "125407841@N08", "secret": "71a3ec4523", "server": "65535", "farm": 66, "title": "Sleeping", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51155499228", "owner": "192936494@N06", "secret": "393eccf135", "server": "65535", "farm": 66, "title": "IMG_4819", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51156365210", "owner": "27648381@N00", "secret": "6221779374", "server": "65535", "farm": 66, "title": "1B418618-5B5B-41AE-8E51-ABE61065979E", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51155492318", "owner": "27648381@N00", "secret": "78d001377a", "server": "65535", "farm": 66, "title": "892CC6B2-4685-478D-873A-6266C5FB72A9", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "51156364605", "owner": "27648381@N00", "secret": "2e67b5a3e7", "server": "65535", "farm": 66, "title": "0E82B85F-5F48-4D24-B4FD-376F2A1711AF", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
    ] }, "stat": "ok" }

https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
https://live.staticflickr.com/65535/51156408855_78b6a67c91_w.jpg
*/