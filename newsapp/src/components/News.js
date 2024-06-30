import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articals = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "India heat: What record air conditioner sales reveal about heatwave",
      "description": "Summer AC sales in India will more than double from last year. What does this say about climate change?",
      "url": "https://www.bbc.co.uk/news/articles/cw555ny3q9xo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f6d0/live/3af84cb0-33ab-11ef-90be-b75b34b0bbb2.jpg",
      "publishedAt": "2024-06-28T10:37:16.1525884Z",
      "content": "About 32% of respondents reported their homes as hot and uncomfortable, highlighting India's struggle with extreme temperatures. Among those who can cool their homes, 42% rely on energy-intensive air… [+1522 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Reform UK campaigners caught making racist slurs",
      "description": "Party leader Nigel Farage said where people made comments that are \"genuinely offensive\" he would deal with them.",
      "url": "https://www.bbc.co.uk/news/articles/c10l5qd8p60o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/177c/live/3b99e430-34b9-11ef-a286-7d480ed4802f.png",
      "publishedAt": "2024-06-28T08:37:15.4956588Z",
      "content": "Mr Parker is also heard describing Islam as \"the most disgusting cult out\" and suggesting army recruits should carry out target practice by shooting at small boats bringing illegal migrants to the UK… [+2754 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Indira Gandhi International Airport: Roof collapse smashes cars in Delhi",
      "description": "Videos show crushed cars and broken pillars after a canopy over Terminal 1 collapses, killing one person.",
      "url": "https://www.bbc.co.uk/news/articles/c725ny6p960o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9111/live/73f7b260-350b-11ef-b606-993eb74348a6.jpg",
      "publishedAt": "2024-06-28T08:22:11.9642241Z",
      "content": "A roof at Delhi airport has collapsed after heavy rain, killing one person and injuring four others.\r\nVideos online show huge pillars supporting the roof smashing into cars parked along the airport's… [+601 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Democrats do damage control after Biden-Trump debate",
      "description": "Prominent voices in the Democratic Party are openly criticising the president's performance as the campaign focuses on Trump's \"lies.\"",
      "url": "https://www.bbc.co.uk/news/articles/c9wv8292g2yo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d3f5/live/26a05890-3516-11ef-a0e8-99640e9e25da.jpg",
      "publishedAt": "2024-06-28T06:22:18.6053803Z",
      "content": "Joe Bidens campaign was prepared to come out swinging after tonights debate against Donald Trump.\r\nInstead, they were backed into a corner.\r\nThe campaigns top surrogates wound up pinned at one end of… [+4476 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "China honours woman who died saving Japanese family",
      "description": "Hu Youping, a bus attendant, tried to restrain an assailant at a bus stop outside a Japanese school.",
      "url": "https://www.bbc.co.uk/news/articles/c99wjqzqyr7o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2076/live/ebc85540-3508-11ef-a881-27063b03fc31.png",
      "publishedAt": "2024-06-28T06:07:18.6834225Z",
      "content": "A Chinese woman who tried to shield a Japanese mother and her child from a knife attack has died.\r\nHu Youping was working as a school bus attendant in Suzhou city when a man attacked a Japanese woman… [+2577 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Prince Harry told to explain missing messages in News Group Newspapers lawsuit",
      "description": "The ruling is part of Prince Harry's lawsuit against the Sun publisher over claims of phone hacking.",
      "url": "https://www.bbc.co.uk/news/articles/cn4vyr567q8o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/35de/live/8eef7280-34a5-11ef-951b-b76e5d261303.png",
      "publishedAt": "2024-06-28T04:07:20.1007206Z",
      "content": "\"The position is not transparently clear about what happened,\" the judge said.\r\nHe said the prince's exchanges with writer JR Moehringer on the Signal messaging app may have \"related to the parts of … [+2071 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Who won the Trump-Biden presidential debate?",
      "description": "The president came into his debate with Donald Trump with a low bar to clear, and he struggled, writes Anthony Zurcher.",
      "url": "https://www.bbc.co.uk/news/articles/crgedpw4r5eo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e09b/live/19b4c050-34f6-11ef-a328-d331e5fe750b.jpg",
      "publishedAt": "2024-06-28T03:37:15.2773218Z",
      "content": "Before Thursday evening, many Americans had expressed concerns about Joe Bidens age and fitness for office. To say that this debate did not put those concerns to rest may be one of the greatest under… [+1514 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Electric car battery charges in under five minutes in track test",
      "description": "The charging time is much quicker than even the fastest-charging batteries currently on the market.",
      "url": "https://www.bbc.co.uk/news/articles/cz9dp3ye77do",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9d77/live/529763e0-3461-11ef-b897-13a310eae57b.jpg",
      "publishedAt": "2024-06-28T01:22:15.0741268Z",
      "content": "An electric car battery developed by UK start-up Nyobolt has successfully charged from 10% to 80% in four minutes and 37 seconds in its first live demonstration.\r\nIt was achieved with a specially-bui… [+1064 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Iran election: As young lose hope, a reformist runs for president",
      "description": "As Iran votes for a new president, a reformist critical of the morality police has been topping polls.",
      "url": "https://www.bbc.co.uk/news/articles/c98qgw8qxq7o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5222/live/64c77130-34b2-11ef-8557-bbe6d78d7b76.jpg",
      "publishedAt": "2024-06-28T00:37:11.4181631Z",
      "content": "Many Iranians have lost hope of any meaningful change being delivered through the ballot box.\r\nI wont vote this year, a 70-year old woman in Tehran, who has previously voted for reformist candidates,… [+1955 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Voice of Baceprot: Indonesia’s hijab-wearing metalheads play Glastonbury",
      "description": "The band has been praised by international rock stars but their music has also struck some nerves.",
      "url": "https://www.bbc.co.uk/news/articles/cz473vr2qvro",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/99aa/live/fe834380-3453-11ef-9511-d706d739bd96.jpg",
      "publishedAt": "2024-06-27T23:07:16.2304095Z",
      "content": "But the band and their music have also struck some nerves.\r\nSome people in their town, dominated by conservative Muslims, did not respond well when they ventured into heavy metal. Marsya was once hit… [+1358 chars]"
    }
  ]
  constructor(){
    super();
    this.state={
      articals:this.articals,
      loading:false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Latest News </h1>
        <div className="row">
          {this.state.articals.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
      </div>
    )
  }
}
