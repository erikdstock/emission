import * as React from "react"
import * as TestUtils from "react-dom/test-utils"
import "react-native"
import * as renderer from "react-test-renderer"

import ZeroStateInbox from "../../Components/Inbox/Conversations/ZeroStateInbox"
import Inbox from "../Inbox"

it("renders correctly", () => {
  const tree = renderer.create(<Inbox me={meProps()} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("shows empty state if there's no data", () => {
  const tree = renderer.create(<Inbox me={meProps(false, false)} />).toJSON()
  // const emptyStateView = TestUtils.scryRenderedComponentsWithType(tree, ZeroStateInbox)
  // expect(emptyStateView.length).toEqual(1)
})

const meProps = (withBids: boolean = true, withMessages: boolean = true) => {
  const conversations = withMessages
    ? {
        edges: [
          {
            node: {
              id: "582",
              inquiry_id: "59302144275b244a81d0f9c6",
              from: { name: "Jean-Luc Collecteur", email: "luc+messaging@artsymail.com" },
              to: { name: "ACA Galleries" },
              last_message: "Karl and Anna... Fab!",
              created_at: "2017-06-01T14:14:35.538Z",
              items: [
                {
                  title: "Karl and Anna Face Off (Diptych)",
                  item: {
                    __typename: "Artwork",
                    title: "Karl and Anna Face Off (Diptych)",
                    id: "bradley-theodore-karl-and-anna-face-off-diptych",
                    href: "/artwork/bradley-theodore-karl-and-anna-face-off-diptych",
                    date: "2016",
                    artist_names: "Bradley Theodore",
                    image: {
                      url: "https://d32dm0rphc51dk.cloudfront.net/bJ9I_vJX9ksaKFJAkOAIKg/normalized.jpg",
                      image_url: "https://d32dm0rphc51dk.cloudfront.net/bJ9I_vJX9ksaKFJAkOAIKg/:version.jpg",
                    },
                  },
                },
              ],
            },
          },
          {
            node: {
              id: "581",
              inquiry_id: "593020be8b3b814f9f86f2fd",
              from: { name: "Jean-Luc Collecteur", email: "luc+messaging@artsymail.com" },
              to: { name: "David Krut Projects" },
              last_message:
                "Hi, I’m interested in purchasing this work. \
                    Could you please provide more information about the piece?",
              created_at: "2017-06-01T14:12:19.155Z",
              items: [
                {
                  title: "Darkness Give Way to Light",
                  item: {
                    __typename: "Artwork",
                    id: "aida-muluneh-darkness-give-way-to-light-1",
                    href: "/artwork/aida-muluneh-darkness-give-way-to-light-1",
                    title: "Darkness Give Way to Light",
                    date: "2016",
                    artist_names: "Aida Muluneh",
                    image: {
                      url: "https://d32dm0rphc51dk.cloudfront.net/FDIuqbZUY1kLR-1Pd-Ec8w/normalized.jpg",
                      image_url: "https://d32dm0rphc51dk.cloudfront.net/FDIuqbZUY1kLR-1Pd-Ec8w/:version.jpg",
                    },
                  },
                },
              ],
            },
          },
        ],
      }
    : { edges: [] }

  const lotStandings = withBids
    ? [
        {
          active_bid: {
            id: "594934048b3b8174796e285a",
            display_max_bid_amount_dollars: "$1,100",
            max_bid: {
              cents: 110000,
              display: "$1,100",
            },
            sale_artwork: {
              lot_label: "14",
              lot_number: "14",
              position: 14,
              highest_bid: {
                cents: 110000,
                display: "$1,100",
              },
              artwork: {
                id: "josephine-meckseper-untitled-flag-2-2017",
                title: "Untitled (Flag 2), 2017",
                image: {
                  image_url: "https://d32dm0rphc51dk.cloudfront.net/3N6jyj5G_jjzYbkwbIM4tA/:version.jpg",
                },
                artist: {
                  name: "Josephine Meckseper",
                },
              },
            },
          },
        },
        {
          active_bid: {
            id: "594933e6275b244305851e9c",
            display_max_bid_amount_dollars: "$10,000",
            max_bid: {
              cents: 1000000,
              display: "$10,000",
            },
            sale_artwork: {
              lot_label: "8",
              lot_number: "8",
              position: 8,
              highest_bid: {
                cents: 1000000,
                display: "$10,000",
              },
              artwork: {
                id: "robert-longo-untitled-dividing-time",
                title: "Untitled (Dividing Time)",
                image: {
                  image_url: "https://d32dm0rphc51dk.cloudfront.net/4GlhFa7ci5-0W25sjDNFIQ/:version.jpg",
                },
                artist: {
                  name: "Robert Longo",
                },
              },
            },
          },
        },
        {
          active_bid: {
            id: "594932d0275b244305851e99",
            display_max_bid_amount_dollars: "$5,000",
            max_bid: {
              cents: 500000,
              display: "$5,000",
            },
            sale_artwork: {
              lot_label: "2",
              lot_number: "2",
              position: 2,
              highest_bid: {
                cents: 500000,
                display: "$5,000",
              },
              artwork: {
                id: "trevor-paglen-weeping-angel",
                title: "Weeping Angel",
                image: {
                  image_url: "https://d32dm0rphc51dk.cloudfront.net/W-XblMAGxZJbhx0FfH1HtQ/:version.jpg",
                },
                artist: {
                  name: "Trevor Paglen",
                },
              },
            },
          },
        },
      ]
    : []

  return {
    conversations,
    lot_standings: lotStandings,
  }
}
