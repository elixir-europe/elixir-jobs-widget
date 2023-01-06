/*
    Script to show the jobs from elixir-europe.org on another website.
    Contact: webmaster@elixir-europe.org
*/

// Require the RSS parser
// All kudos for this to Bobby Brennan (https://github.com/bobby-brennan/rss-parser)
let Parser = require("rss-parser");
let parser = new Parser();

const CORS_PROXY = "https://corsproxy.io/?";
var templateItemWrapper = document.getElementById("template-item");
var templateHtml = templateItemWrapper.innerHTML;
var itemHtml = "";

// Request the jobs RSS feed via a proxy to avoid CORS issues.
parser.parseURL(CORS_PROXY + "https://elixir-europe.org/feeds/jobs.xml", function(err, feed) {
    // Check for errors e.g. no connection to the ELIXIR site. Print values into
    // the template if no errors.
    if (err == null) {
        feed.items.forEach(function(entry) {
            itemHtml += templateHtml.replace(/{{title}}/g, entry.title)
                .replace(/{{closingDate}}/g, entry.content)
                .replace(/{{location}}/g, entry.creator);
        });
        document.getElementById("template-wrapper").innerHTML = itemHtml;
    } else {
        // Generate an error message if there are problems raeching the RSS feed.
        var para = document.createElement("p");
        para.classList.add("jobs-error");
        var paraText = document.createTextNode("There are no jobs to show at the moment.");
        para.appendChild(paraText);
        jobsWrapper.parentNode.insertBefore(para, jobsWrapper.nextSibling);
    }
});
