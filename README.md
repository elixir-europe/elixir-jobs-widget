# ELIXIR jobs widget

This is a simple snippet of Javascript you can paste in a web page. It displays the jobs listed on the [ELIXIR Europe jobs page](https://elixir-europe.org/about-us/vacancies).

It was meant for non-technical users and/or those with no time.

## Usage

Copy and paste the following text into your web page, where you want the job list to appear. If you are using a content management system like Wordpress you will need to use the 'Text' (or 'Source' or 'Code') editor to do this.


        <!-- START OF ELIXIR JOBS WIDGET -->
        <!--
        HTML template for the jobs listing. The default here is a table.
        You can change this to what you want (e.g. a list) but you need to keep
        'template-wrapper' as the id of the parent element and 'template-item'
        as the id of the element that wraps each job.  The placeholders {{title}},
        {{location}} and {{closingDate}} are populated by the script.
        -->
        <table>
            <thead>
            <th>Title</th>
            <th>Location</th>
            <th>Closing date</th>
            </thead>
            <tbody id="template-wrapper">
            <script id="template-item" type="text/template">
            <tr>
                <td>{{title}}</td>
                <td>{{location}}</td>
                <td>{{closingDate}}</td>
            </tr>
            </script>
            </tbody>
        </table>
        <p><a href="https://elixir-europe.org/about-us/vacancies/form" target="_blank">Submit a job</a> on the ELIXIR Europe website.</p>
        <script src="https://elixir-europe.org/sites/all/libraries/jobs/elixir-jobs.js"></script>

### Notes

 - The table will inherit the style of your website. It has no styling with it.
 - There is no title to the table. You need to put that above the pasted code.
 - The table shows all jobs from the ELIXIR job vacancies page, including jobs from industry.
 - You can change the HTML in the code above as long as you keep the placeholders {{title}}, {{location}} and {{closingDate}}, and you keep the ids template-wrapper and template-item.
 - If the script can't connect to the file where the jobs are located (on the ELIXIR server) then it will say, "There are no jobs to show at the moment". If you get this message contact [webmaster@elixir-europe.org](mailto:webmaster@elixir-europe.org).