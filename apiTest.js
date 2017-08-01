// Custom fields are passed as arrays formatted [slug, display name]

var data= {
  'fields' : ['first_name','last_name', ['graduation_year', 'Graduation Year'], ['maiden_name', 'Maiden Name']],
  'photos' : true,
  'stage' : 'load',
  'info': {'slug':'test-oshkoshnation', 'dir_url':'http://test-oshkoshnation.nationbuilder.com/search','org_name': 'Test Oshkosh Nation'},
  'query':{}
}

$.ajax({
  type: "GET",
  url: "http://159.203.131.150:3000",
  data: data,
  crossDomain: true,

  success: function(response) {
    response = JSON.parse(response);
    $(response.html).prependTo("#content");
    $(response.scripts).appendTo("body");
  }
            
});

