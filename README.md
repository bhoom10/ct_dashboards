This repository contains the code for the implementation of my Master thesis project  titled **Computational Thinking Dashboard For Learners in Jupyter Notebooks**. 

The framework created for CT assessment in this research can be integrated and reproduced easily for any Python beginners course that uses Jupyter notebooks. The steps to do so are:
1. Setup a LogUI server following the [LogUI server documentation](https://github.com/logui-framework/server)
2. Add metadata tags to the course cells. The tags available are - ```data, operators, conditionals, loops, functionals, sequences, visualization ```
3. Add the code for logging the micro-interactions into each notebook as a separate cell in the beginning. This code is:\
`%%html`\
`<script src='../Logui/logui.bundle.js'></script> `\
`<script notebook=0 src='../Logui/Logui_test.js'></script>`\
The code for each notebook(an integer number) should be different to identify it as a separate notebook
4. Add the LogUI client files contained in the folder ```LogUI``` and configure the LogUI server link and authorisation token (follow [LogUI client instructions](https://github.com/logui-framework/client))
5. Add the UserID to the LogUI client files
6. Add the CT concepts dashboards to the modules and the overall CT practices dashboard(user ID to be configured here as the variable value) titled `CT_concepts_dashboard` in each module and `CT_practices_dashboard` in the main course folder respectively

With this, you have integrated the CT assessment framework in your course! 
