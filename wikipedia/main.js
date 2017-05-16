$(document).ready(function(){
  var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
  var call = "&callback=?"
  var urlMain = "https://en.wikipedia.org/?curid=";
  var html;
  var results;
  $('.send-btn').on('click', function(e){
    e.preventDefault();
    var termSpace = $('.search').val();
    var term = encodeURI(termSpace);
    var fullApi = api + term + call;
    $.getJSON(`${fullApi}`,function(json){
      results = json.query.pages;
      console.log(results);
      var arr = $.map(results, function(el) { return el });
      console.log(arr);
      html = arr.map(function(d){
        return `<div class="dataList"><a href=${urlMain}${d.pageid}><h2>${d.title}</h2><small>${d.pageid}</small><p>${d.extract}</p></a></div>`
      });
      document.querySelector('.card').innerHTML = html;
    })
  });
})
