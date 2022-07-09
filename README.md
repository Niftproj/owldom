<div id="top"></div>

<br />
<div align="center">
    <a href="https://github.com/Niftproj/owldom">
        <img src="meta/brand.png" alt="Logo" width="auto" height="147">
    </a>

  <h3 align="center">OWLDOM</h3>

  <p align="center">
        Do not mess with DOM/Markups <i>(WORK IN PROGRESS.)</i>
    <br />
  </p>

</div>

<br />

<h3>Usage :</h3>
<code>

    <script src="owldom.js" />
    
    <script>

    var domBoy = new OwlDOM();

    /// prototype of `grabElement()`
    .grabElement(__TAG_NAME__, __ID__, __CLASS_LIST__)

    // below all are optionals, only one can give as expected
    // __TAG_NAME__: h1, h3, div, etc.
    // __ID__: id attribute of any element like foo, bar etc
    // __CLASS_LIST__: [] classNames in array

    // to get all elements as a array even childs
    console.log(domBoy.grabElement('*'));

    // to get h1 + element with specified Id + elements array with specified classNames
    console.log(domBoy.grabElement('h1', 'unique-h2'), ['class1', 'class2']);
    </script>
</code>