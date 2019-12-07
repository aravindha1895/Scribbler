var postTitile = "Sristhi Gupta";
var content = `Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.
Though .js is the standard filename extension for JavaScript code, the name "Node.js" does not refer to a particular file in this context and is merely the name of the product. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games)`;

function populatePost() {
    document.getElementById('post-contents').value = content;
    document.getElementById('post-contents').setAttribute('disabled', 'true');
    document.getElementById('post-title-edit').value = "Sristhi Gupta";
    document.getElementById('post-title-edit').setAttribute('disabled', 'true');
}