function search(){
    let textToSearch = $('#searchText').val();
    let towns = $('ul#towns li');
    let mateches = 0;
    
    for(let town of towns){
        if(town.textContent.includes(textToSearch)){
            $(town).css("font-weight", 'bold');
            mateches ++;
        }
        else {
            $(town).css("font-weight", '');
        }
    }
    $('#result').text(`${mateches} matches found.`);
}