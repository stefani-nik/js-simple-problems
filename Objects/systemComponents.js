function systemComponents(input) {
    let components = new Map();

    for(let line of input){
        let currentRow = line.split(" | ");
        let systemName = currentRow[0];
        let componentName = currentRow[1];
        let subcompName = currentRow[2];

        if(components.has(systemName)){
            if(components.get(systemName).has(componentName)){
                components.get(systemName).get(componentName).push(subcompName);
            }
            else{
                components.get(systemName).set(componentName , [subcompName]);
            }
        }
        else {
            components.set(systemName, new Map());
            components.get(systemName).set(componentName , [subcompName]);
        }
    }
   let sortedComps = [...components].sort(function(a, b) {
        if (a[1].size < b[1].size) {
            return 1;
        }
        else if (a[1].size > b[1].size) {
            return -1;
        }
        else {
           return a[0].localeCompare(b[0]);
        }

    });

    for(let [system, component] of sortedComps){
        console.log(`${system}`);
        component = [...component].sort((a,b) => b[1].length - a[1].length);
        for(let [comp, subcomps] of component){
            console.log(`|||${comp}`);
            subcomps.forEach(x=> console.log(`||||||${x}`));
        }
    }
}
systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);