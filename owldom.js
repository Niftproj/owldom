/*
Easier manage the DOM. Don't mess with it.
*/
function OwlDOM() {}

function getRoundObject(method, data)
{
    return {method: method, data: data};
}

/// roundSearch[0] -> by Tag Name:[] | [1] -> by id:DOM, [2] -> by class Lists:[]
OwlDOM.prototype.grabElement = function({tagName, id, classList: []})
{
    let roundSearch = [];

    if(tagName !== null)
    {
        roundSearch.push(getRoundObject('tagName', document.getElementsByTagName(tagName)));
    }

    if(id !== null)
    {
        roundSearch.push(getRoundObject('id', document.getElementById(id)));
    }

    if(classList.length > 0)
    {
        classList.forEach(classN => {
            roundSearch.push(getRoundObject('className', document.querySelectorAll(classN)));
        });
    }

    return roundSearch;
}