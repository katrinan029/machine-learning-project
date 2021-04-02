# Project SIMPLE: Service Improvement through Machine Processing of Linguistic Evaluations
## Keep it Simba’l
![](project_logo.png)

Customer Relations Management (CRM) has long struggled with the problem that star reviews fail to give enough nuance about what their clients/customers are really feeling. This plays into the limitations that have long plagued quantitative data. Fortunately qualitative text reviews often accompany star reviews. However, text reviews are voluminous and qualitative analysi can often be too verbose to understnd. Natural Language Processing (NLP) is one potential solution to this old quantification versus qualification debate. Linguistic analysis can inform quantitative data and reveal additional dimensions and insights about massive amounts of textual data. In this example, an example of how NLP can be leveraged to inform CRM is provided by sifting through Disneyland reviews. 

## Machine Learning Project

### Background
Disneyland is the most magical place on earth and thousands of people visit every year. In this study, we are looking to analyze visitors’ experience by looking at the reviews for 3 different parks Hong Kong, California, and Paris. However, numbers and star reviews do not give an accurate picture of the full experience visitors enjoy at Disney Parks. By analyzing text reviews, Disney Parks can learn more about their visitors and their needs and wants; and the metrics associated with good reviews. After all, qualitative data can inform action items better. 

![](disney_park.png)

### Motivation
We want to analyze tourism flow for Disney and help Disney qualitatively understand their customer experience. We want to see what are the common complaints associated with low ratings and common reviews associated with high ratings. What words are associated with high ratings, what words are used to describe different parks, and which words are visitors from different countries more likely to use?  In the end, quantitative data can only help Disney theme parks to a certain extent. Being able to parse qualitative textual data can help improve customer experiences and guide business decisions for the benefit of both Disney Parks and Disney visitors. 
Also, this project will explore the limitations of quantitative data; and demonstrate how qualitative data from written reviews can supplement quantification. Instead of just asking questions of which and how much, textual data can open the door for finding out why the numbers are one way or another.  

### The Dataset
The SIMPLE Team makes use of the Disneyland Reviews Kaggle Dataset which features more than 42,000 unique reviews of 3 Disneyland Parks (California, Hong Kong, Paris) on Trip Avisor recorded between 2015 and 2019. 

### Technologies 
* Python (NLTK, PyLDAvis, nlplot, Sci-kit learn, Pandas, Matplotlib)
* JavaScript (Plotly, D3)
* CSS, HTML, Bootstrap
* PostgreSQL
* Heroku

### The Team
* [Alexei](https://github.com/CaliFlowers)
* [Katrina](https://github.com/katrinan029)
* [Ryan](https://github.com/lmfao415)
* [Jessica](https://github.com/jessicaramosmolina)

### Didcussion
NLP is not perfect; but the data suggests the following: 

1. While Disneyland is well-reviewed based on quntitative metrics. The text that accompanies reviews on Trip Advisor shows some common themes among negative reviews. 
Terms such as "waste", "junk", "overcrowded", "people", and "children" are more relevant in negative reviews. One-time events like evacuations appear in some unusually negative reviews. If Disney Parks are interested in imprving their guest services, these areas might be good places to start. 

2. NLG-models fed only positive reviews tend to give more insight aut the overall aggregate sentiment about Disneyland than simple NLP procedures. When language is decontextualized as is often the case in many NLP procedures, the results can often be misleading. However, a skilled analyst with NLP experience can esily spot trends in text data using techniques pioneered in qualitatitive research methodology, and more recent NLP work. 

3. Context matters in Textual Data as frequencies can be a misleading metric. For example, the word "park" can be interpreted in multiple ways according to context, Idioms, and non-English terms might not be well-handled by tools like NLTK. It also cannot be assumed that NLTK can correctly process text with perfect efficacy and accuracy.  

4. However, it is apparent that the long-held dichotomy between quantified data, and qualitative data is a false one. Technology is beginning to make it possible to  condensequalitative data in a way that will be comprehensible to a casual observer. Thhe applications of this go beyond aiding CRM. Academic research, HR decisions, legal documents, social media, and government communications can all be aided by good NLP.  
