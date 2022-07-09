/**
 * @author Ashu Sharma (ashusharma.sigmadev@gmail.com)
 * @license MIT
 * @copyright Copyright 2022 - Nift* (github.com/Niftproj/owldom).
 */

/**
* Easier manage the DOM. Don't mess with it.
* @class OwlDOM
*/
function OwlDOM() {}

/**
 * Get Object with metadata (only for inner use of OwlDOM)
 * @param {String} method by which method (i.e. className, tagName, id) datas are collected
 * @param {*} data The data that is selected, mainly in Node, NodeList, Array
 * @returns {Object} Returns an Object of given parameters 'method' and 'data'
 */
function getRoundObject(method, data)
{
    return {method: method, data: data};
}

/**
 * Check the given value is really given or not (only for inner use of OwlDOM)
 * @param {String} data The data that has to be runned checks
 * @returns {Boolean} Returns boolean value for checks passed or not
 */
function valueExist(data)
{
    if(data !== undefined && data !== '' && data !== null)
        return true;
    return false;
}

/**
 * Grab any element of DOM
 * @example .grabElement('*') to get All elements even childs in array
 * @param {String} tagName to find elements with provided tagName (Optional)
 * @param {String} id to find elements with specified Id (Optional)
 * @param {Array[String,String]} classList to select all elements with given classList (Optional)
 * @returns {Array} Returns an Array of {getRoundObject} function with metadata
 */
OwlDOM.prototype.grabElement = function(tagName, id, classList = [])
{
    let roundSearch = [];

    if(valueExist(tagName))
    {
        roundSearch.push(getRoundObject('tagName', document.getElementsByTagName(tagName)));
    }

    if(valueExist(id))
    {
        roundSearch.push(getRoundObject('id', document.getElementById(id)));
    }

    if(classList.length > 0)
    {
        classList.forEach(classN => {
            roundSearch.push(getRoundObject('className', document.querySelectorAll('.'+classN)));
        });
    }

    return roundSearch;
}