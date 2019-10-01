type WCAG = any;

export const WCAG = {
  "1": {
    "1": {
      "1": {
        "id": [
          "1",
          "1",
          "1"
        ],
        "title": "Non-text Content",
        "description": "All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.",
        "url": "https://www.w3.org/TR/WCAG20/#text-equiv-all",
        "level": "A",
        "special_cases": [
          {
            "type": "exception",
            "title": "Controls, Input",
            "description": "If non-text content is a control or accepts user input, then it has a name that describes its purpose. (Refer to Guideline 4.1 for additional requirements for controls and content that accepts user input.)"
          },
          {
            "type": "exception",
            "title": "Time-based Media",
            "description": "If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content. (Refer to Guideline 1.2 for additional requirements for media.)"
          },
          {
            "type": "exception",
            "title": "Test",
            "description": "If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content."
          },
          {
            "type": "exception",
            "title": "Sensory",
            "description": "If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content."
          },
          {
            "type": "exception",
            "title": "CAPTCHA",
            "description": "If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities."
          },
          {
            "type": "exception",
            "title": "Decoration, Formatting, Invisible",
            "description": "If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology."
          }
        ],
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.1.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-text-equiv-all"
          },
          {
            "title": "Understanding 1.1.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html"
          }
        ]
      },
      "id": [
        "1",
        "1"
      ],
      "children": [
        1
      ],
      "title": "Text Alternatives",
      "description": "Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.",
      "url": "https://www.w3.org/TR/WCAG20/#text-equiv",
      "references": [
        {
          "title": "Understanding Guideline 1.1",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html"
        }
      ]
    },
    "2": {
      "1": {
        "id": [
          "1",
          "2",
          "1"
        ],
        "title": "Audio-only and Video-only (Prerecorded)",
        "description": "For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt",
        "level": "A",
        "special_cases": [
          {
            "type": "all_true",
            "title": "Prerecorded Audio-only",
            "description": "An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content."
          },
          {
            "type": "all_true",
            "title": "Prerecorded Video-only",
            "description": "Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content."
          }
        ],
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-av-only-alt"
          },
          {
            "title": "Understanding 1.2.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html"
          }
        ]
      },
      "2": {
        "id": [
          "1",
          "2",
          "2"
        ],
        "title": "Captions (Prerecorded)",
        "description": "Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-captions",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-captions"
          },
          {
            "title": "Understanding 1.2.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html"
          }
        ]
      },
      "3": {
        "id": [
          "1",
          "2",
          "3"
        ],
        "title": "Audio Description or Media Alternative (Prerecorded)",
        "description": "An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-audio-desc",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-audio-desc"
          },
          {
            "title": "Understanding 1.2.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc.html"
          }
        ]
      },
      "4": {
        "id": [
          "1",
          "2",
          "4"
        ],
        "title": "Captions (Live)",
        "description": "Captions are provided for all live audio content in synchronized media.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.4",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-real-time-captions"
          },
          {
            "title": "Understanding 1.2.4",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-real-time-captions.html"
          }
        ]
      },
      "5": {
        "id": [
          "1",
          "2",
          "5"
        ],
        "title": "Audio Description (Prerecorded)",
        "description": "Audio description is provided for all prerecorded video content in synchronized media.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.5",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-audio-desc-only"
          },
          {
            "title": "Understanding 1.2.5",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-audio-desc-only.html"
          }
        ]
      },
      "6": {
        "id": [
          "1",
          "2",
          "6"
        ],
        "title": "Sign Language (Prerecorded)",
        "description": "Sign language interpretation is provided for all prerecorded audio content in synchronized media.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-sign",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.6",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-sign"
          },
          {
            "title": "Understanding 1.2.6",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-sign.html"
          }
        ]
      },
      "7": {
        "id": [
          "1",
          "2",
          "7"
        ],
        "title": "Extended Audio Description (Prerecorded)",
        "description": "Where pauses in foreground audio are insufficient to allow audio descriptions to convey the sense of the video, extended audio description is provided for all prerecorded video content in synchronized media.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-extended-ad",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.7",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-extended-ad"
          },
          {
            "title": "Understanding 1.2.7",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-extended-ad.html"
          }
        ]
      },
      "8": {
        "id": [
          "1",
          "2",
          "8"
        ],
        "title": "Media Alternative (Prerecorded)",
        "description": "An alternative for time-based media is provided for all prerecorded synchronized media and for all prerecorded video-only media.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-text-doc",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.8",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-text-doc"
          },
          {
            "title": "Understanding 1.2.8",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-text-doc.html"
          }
        ]
      },
      "9": {
        "id": [
          "1",
          "2",
          "9"
        ],
        "title": "Audio-only (Live)",
        "description": " An alternative for time-based media that presents equivalent information for live audio-only content is provided.",
        "url": "https://www.w3.org/TR/WCAG20/#media-equiv-live-audio-only",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.2.9",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-media-equiv-live-audio-only"
          },
          {
            "title": "Understanding 1.2.9",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-live-audio-only.html"
          }
        ]
      },
      "id": [
        "1",
        "2"
      ],
      "children": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "title": "Time-based Media",
      "description": "Provide alternatives for time-based media.",
      "url": "https://www.w3.org/TR/WCAG20/#media-equiv",
      "references": [
        {
          "title": "Understanding Guideline 1.2",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv.html"
        }
      ]
    },
    "3": {
      "1": {
        "id": [
          "1",
          "3",
          "1"
        ],
        "title": "Info and Relationships",
        "description": "Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.",
        "url": "https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.3.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-programmatic"
          },
          {
            "title": "Understanding 1.3.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html"
          }
        ]
      },
      "2": {
        "id": [
          "1",
          "3",
          "2"
        ],
        "title": "Meaningful Sequence",
        "description": "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
        "url": "https://www.w3.org/TR/WCAG20/#content-structure-separation-sequence",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.3.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-sequence"
          },
          {
            "title": "Understanding 1.3.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html"
          }
        ]
      },
      "3": {
        "id": [
          "1",
          "3",
          "3"
        ],
        "title": "Sensory Characteristics",
        "description": "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.",
        "url": "https://www.w3.org/TR/WCAG20/#content-structure-separation-understanding",
        "level": "A",
        "special_cases": null,
        "notes": [
          {
            "content": "For requirements related to color, refer to Guideline 1.4."
          }
        ],
        "references": [
          {
            "title": "How to Meet 1.3.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-content-structure-separation-understanding"
          },
          {
            "title": "Understanding 1.3.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-understanding.html"
          }
        ]
      },
      "id": [
        "1",
        "3"
      ],
      "children": [
        1,
        2,
        3
      ],
      "title": "Adaptable",
      "description": "Create content that can be presented in different ways (for example simpler layout) without losing information or structure.",
      "url": "https://www.w3.org/TR/WCAG20/#content-structure-separation",
      "references": [
        {
          "title": "Understanding Guideline 1.3",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation.html"
        }
      ]
    },
    "4": {
      "1": {
        "id": [
          "1",
          "4",
          "1"
        ],
        "title": "Use of Color",
        "description": "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color",
        "level": "A",
        "special_cases": null,
        "notes": [
          {
            "content": "This success criterion addresses color perception specifically. Other forms of perception are covered in Guideline 1.3 including programmatic access to color and other visual presentation coding."
          }
        ],
        "references": [
          {
            "title": "How to Meet 1.4.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-without-color"
          },
          {
            "title": "Understanding 1.4.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html"
          }
        ]
      },
      "2": {
        "id": [
          "1",
          "4",
          "2"
        ],
        "title": "Audio Control",
        "description": "If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio",
        "level": "A",
        "special_cases": null,
        "notes": [
          {
            "content": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether or not it is used to meet other success criteria) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG20/#cc5)"
          }
        ],
        "references": [
          {
            "title": "How to Meet 1.4.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-dis-audio"
          },
          {
            "title": "Understanding 1.4.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-dis-audio.html"
          }
        ]
      },
      "3": {
        "id": [
          "1",
          "4",
          "3"
        ],
        "title": "Contrast (Minimum)",
        "description": " The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",
        "level": "AA",
        "special_cases": [
          {
            "type": "exception",
            "title": "Large Text",
            "description": "Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;"
          },
          {
            "type": "exception",
            "title": "Incidental",
            "description": "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement."
          },
          {
            "type": "exception",
            "title": "Logotypes",
            "description": "Text that is part of a logo or brand name has no minimum contrast requirement."
          }
        ],
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.4.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast"
          },
          {
            "title": "Understanding 1.4.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"
          }
        ]
      },
      "4": {
        "id": [
          "1",
          "4",
          "4"
        ],
        "title": "Resize text",
        "description": "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.4.4",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-scale"
          },
          {
            "title": "Understanding 1.4.4",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html"
          }
        ]
      },
      "5": {
        "id": [
          "1",
          "4",
          "5"
        ],
        "title": "Images of Text",
        "description": "If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text except for the following:",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation",
        "level": "AA",
        "special_cases": [
          {
            "type": "exception",
            "title": "Customizable",
            "description": "The image of text can be visually customized to the user's requirements;"
          },
          {
            "type": "exception",
            "title": "Essential",
            "description": "A particular presentation of text is essential to the information being conveyed."
          }
        ],
        "notes": [
          {
            "content": "Logotypes (text that is part of a logo or brand name) are considered essential."
          }
        ],
        "references": [
          {
            "title": "How to Meet 1.4.5",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-presentation"
          },
          {
            "title": "Understanding 1.4.5",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-presentation.html"
          }
        ]
      },
      "6": {
        "id": [
          "1",
          "4",
          "6"
        ],
        "title": "Contrast (Enhanced)",
        "description": "The visual presentation of text and images of text has a contrast ratio of at least 7:1, except for the following: ",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast7",
        "level": "AAA",
        "special_cases": [
          {
            "type": "exception",
            "title": "Large Text",
            "description": "Large-scale text and images of large-scale text have a contrast ratio of at least 4.5:1;"
          },
          {
            "type": "exception",
            "title": "Incidental",
            "description": "Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement."
          },
          {
            "type": "exception",
            "title": "Logotypes",
            "description": "Text that is part of a logo or brand name has no minimum contrast requirement."
          }
        ],
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.4.6",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast7"
          },
          {
            "title": "Understanding 1.4.6",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html"
          }
        ]
      },
      "7": {
        "id": [
          "1",
          "4",
          "7"
        ],
        "title": "Low or No Background Audio",
        "description": "For prerecorded audio-only content that (1) contains primarily speech in the foreground, (2) is not an audio CAPTCHA or audio logo, and (3) is not vocalization intended to be primarily musical expression such as singing or rapping, at least one of the following is true:",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast-noaudio",
        "level": "AAA",
        "special_cases": [
          {
            "type": "at_least_one",
            "title": "No Background",
            "description": "The audio does not contain background sounds."
          },
          {
            "type": "at_least_one",
            "title": "Turn Off",
            "description": "The background sounds can be turned off."
          },
          {
            "type": "at_least_one",
            "title": "20 dB",
            "description": "The background sounds are at least 20 decibels lower than the foreground speech content, with the exception of occasional sounds that last for only one or two seconds."
          }
        ],
        "notes": [
          {
            "content": "Per the definition of 'decibel,' background sound that meets this requirement will be approximately four times quieter than the foreground speech content."
          }
        ],
        "references": [
          {
            "title": "How to Meet 1.4.7",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-noaudio"
          },
          {
            "title": "Understanding 1.4.7"
          }
        ]
      },
      "8": {
        "id": [
          "1",
          "4",
          "8"
        ],
        "title": "Visual Presentation",
        "description": "For the visual presentation of blocks of text, a mechanism is available to achieve the following:",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast-visual-presentation",
        "level": "AAA",
        "special_cases": [
          {
            "type": "all_true",
            "title": "Foreground and background colors can be selected by the user."
          },
          {
            "type": "all_true",
            "title": "Width is no more than 80 characters or glyphs (40 if CJK)."
          },
          {
            "type": "all_true",
            "title": "Text is not justified (aligned to both the left and the right margins)."
          },
          {
            "type": "all_true",
            "title": "Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing."
          },
          {
            "type": "all_true",
            "title": "Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window."
          }
        ],
        "notes": null,
        "references": [
          {
            "title": "How to Meet 1.4.8",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-visual-presentation"
          },
          {
            "title": "Understanding 1.4.8",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html"
          }
        ]
      },
      "9": {
        "id": [
          "1",
          "4",
          "9"
        ],
        "title": "Images of Text (No Exception)",
        "description": "Images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
        "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-images",
        "level": "AAA",
        "special_cases": null,
        "notes": [
          {
            "content": "Logotypes (text that is part of a logo or brand name) are considered essential."
          }
        ],
        "references": [
          {
            "title": "How to Meet 1.4.9",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-text-images"
          },
          {
            "title": "Understanding 1.4.9",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-text-images.html"
          }
        ]
      },
      "id": [
        "1",
        "4"
      ],
      "children": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "title": "Distinguishable",
      "description": "Make it easier for users to see and hear content including separating foreground from background.",
      "url": "https://www.w3.org/TR/WCAG20/#visual-audio-contrast",
      "references": [
        {
          "title": "Understanding Guideline 1.4",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast.html"
        }
      ]
    },
    "id": [
      "1"
    ],
    "children": [
      1,
      2,
      3,
      4
    ],
    "title": "Perceivable",
    "description": "Information and user interface components must be presentable to users in ways they can perceive.",
    "url": "https://www.w3.org/TR/WCAG20/#perceivable"
  },
  "2": {
    "1": {
      "1": {
        "id": [
          "2",
          "1",
          "1"
        ],
        "title": "Keyboard",
        "description": "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.",
        "url": "https://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable",
        "level": "A",
        "special_cases": null,
        "notes": [
          {
            "content": "This exception relates to the underlying function, not the input technique. For example, if using handwriting to enter text, the input technique (handwriting) requires path-dependent input but the underlying function (text input) does not."
          },
          {
            "content": "This does not forbid and should not discourage providing mouse input or other input methods in addition to keyboard operation."
          }
        ],
        "references": [
          {
            "title": "How to Meet 2.1.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-keyboard-operable"
          },
          {
            "title": "Understanding 2.1.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-keyboard-operable.html"
          }
        ]
      },
      "2": {
        "id": [
          "2",
          "1",
          "2"
        ],
        "title": "No Keyboard Trap",
        "description": "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.",
        "url": "https://www.w3.org/TR/WCAG20/#keyboard-operation-trapping",
        "level": "A",
        "special_cases": null,
        "notes": [
          {
            "content": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG20/#cc5)"
          }
        ],
        "references": [
          {
            "title": "How to Meet 2.1.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-trapping"
          },
          {
            "title": "Understanding 2.1.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html"
          }
        ]
      },
      "3": {
        "id": [
          "2",
          "1",
          "3"
        ],
        "title": "Keyboard (No Exception)",
        "description": "All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes.",
        "url": "https://www.w3.org/TR/WCAG20/#keyboard-operation-all-funcs",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.1.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-keyboard-operation-all-funcs"
          },
          {
            "title": "Understanding 2.1.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-all-funcs.html"
          }
        ]
      },
      "id": [
        "2",
        "1"
      ],
      "children": [
        1,
        2,
        3
      ],
      "title": "Keyboard Accessible",
      "description": "Make all functionality available from a keyboard.",
      "url": "https://www.w3.org/TR/WCAG20/#keyboard-operation",
      "references": [
        {
          "title": "Understanding Guideline 2.1",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html"
        }
      ]
    },
    "2": {
      "1": {
        "id": [
          "2",
          "2",
          "1"
        ],
        "title": "Timing Adjustable",
        "description": "For each time limit that is set by the content, at least one of the following is true:",
        "url": "https://www.w3.org/TR/WCAG20/#time-limits-required-behaviors",
        "level": "A",
        "special_cases": [
          {
            "type": "at_least_one",
            "title": "Turn off",
            "description": "The user is allowed to turn off the time limit before encountering it; or"
          },
          {
            "type": "at_least_one",
            "title": "Adjust",
            "description": "The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or"
          },
          {
            "type": "at_least_one",
            "title": "Extend",
            "description": "The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, 'press the space bar'), and the user is allowed to extend the time limit at least ten times; or"
          },
          {
            "type": "at_least_one",
            "title": "Real-time Exception",
            "description": "The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or"
          },
          {
            "type": "at_least_one",
            "title": "Essential Exception",
            "description": "The time limit is essential and extending it would invalidate the activity; or"
          },
          {
            "type": "at_least_one",
            "title": "20 Hour Exception",
            "description": "The time limit is longer than 20 hours."
          }
        ],
        "notes": [
          {
            "content": "This success criterion helps ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. This success criterion should be considered in conjunction with Success Criterion 3.2.1 (https://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus), which puts limits on changes of content or context as a result of user action."
          }
        ],
        "references": [
          {
            "title": "How to Meet 2.2.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-required-behaviors"
          },
          {
            "title": "Understanding 2.2.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html"
          }
        ]
      },
      "2": {
        "id": [
          "2",
          "2",
          "2"
        ],
        "title": "Pause, Stop, Hide",
        "description": "For moving, blinking, scrolling, or auto-updating information, all of the following are true:",
        "url": "https://www.w3.org/TR/WCAG20/#time-limits-pause",
        "level": "A",
        "special_cases": [
          {
            "type": "all_true",
            "title": "Moving, blinking, scrolling",
            "description": "For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and"
          },
          {
            "type": "all_true",
            "title": "Auto-updating",
            "description": "For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential."
          }
        ],
        "notes": [
          {
            "content": "For requirements related to flickering or flashing content, refer to Guideline 2.3. (https://www.w3.org/TR/WCAG20/#seizure)"
          },
          {
            "content": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference (https://www.w3.org/TR/WCAG20/#cc5)"
          },
          {
            "content": "Content that is updated periodically by software or that is streamed to the user agent is not required to preserve or present information that is generated or received between the initiation of the pause and resuming presentation, as this may not be technically possible, and in many situations could be misleading to do so."
          },
          {
            "content": "An animation that occurs as part of a preload phase or similar situation can be considered essential if interaction cannot occur during that phase for all users and if not indicating progress could confuse users or cause them to think that content was frozen or broken."
          }
        ],
        "references": [
          {
            "title": "How to Meet 2.2.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-pause"
          },
          {
            "title": "Understanding 2.2.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html"
          }
        ]
      },
      "3": {
        "id": [
          "2",
          "2",
          "3"
        ],
        "title": "No Timing",
        "description": "Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
        "url": "https://www.w3.org/TR/WCAG20/#time-limits-no-exceptions",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.2.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-no-exceptions"
          },
          {
            "title": "Understanding 2.2.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html"
          }
        ]
      },
      "4": {
        "id": [
          "2",
          "2",
          "4"
        ],
        "title": "Interruptions",
        "description": "Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency.",
        "url": "https://www.w3.org/TR/WCAG20/#time-limits-postponed",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.2.4",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-postponed"
          },
          {
            "title": "Understanding 2.2.4",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html"
          }
        ]
      },
      "5": {
        "id": [
          "2",
          "2",
          "5"
        ],
        "title": "Re-authenticating",
        "description": "When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating.",
        "url": "https://www.w3.org/TR/WCAG20/#time-limits-server-timeout",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.2.5",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-time-limits-server-timeout"
          },
          {
            "title": "Understanding 2.2.5",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-server-timeout.html"
          }
        ]
      },
      "id": [
        "2",
        "2"
      ],
      "children": [
        1,
        2,
        3,
        4,
        5
      ],
      "title": "Enough Time",
      "description": "Provide users enough time to read and use content.",
      "url": "https://www.w3.org/TR/WCAG20/#time-limits",
      "references": [
        {
          "title": "Understanding Guideline 2.2",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html"
        }
      ]
    },
    "3": {
      "1": {
        "id": [
          "2",
          "3",
          "1"
        ],
        "title": "Three Flashes or Below Threshold",
        "description": "Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.",
        "url": "https://www.w3.org/TR/WCAG20/#seizure-does-not-violate",
        "level": "A",
        "special_cases": null,
        "notes": [
          {
            "content": "Since any content that does not meet this success criterion can interfere with a user's ability to use the whole page, all content on the Web page (whether it is used to meet other success criteria or not) must meet this success criterion. See Conformance Requirement 5: Non-Interference. (https://www.w3.org/TR/WCAG20/#cc5)"
          }
        ],
        "references": [
          {
            "title": "How to Meet 2.3.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-seizure-does-not-violate"
          },
          {
            "title": "Understanding 2.3.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html"
          }
        ]
      },
      "2": {
        "id": [
          "2",
          "3",
          "2"
        ],
        "title": "Three Flashes",
        "description": "Web pages do not contain anything that flashes more than three times in any one second period.",
        "url": "https://www.w3.org/TR/WCAG20/#seizure-three-times",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.3.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-seizure-three-times"
          },
          {
            "title": "Understanding 2.3.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-three-times.html"
          }
        ]
      },
      "id": [
        "2",
        "3"
      ],
      "children": [
        1,
        2
      ],
      "title": "Seizures",
      "description": "Do not design content in a way that is known to cause seizures.",
      "url": "https://www.w3.org/TR/WCAG20/#seizure",
      "references": [
        {
          "title": "Understanding Guideline 2.3",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure.html"
        }
      ]
    },
    "4": {
      "1": {
        "id": [
          "2",
          "4",
          "1"
        ],
        "title": "Bypass Blocks",
        "description": "A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-skip"
          },
          {
            "title": "Understanding 2.4.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html"
          }
        ]
      },
      "2": {
        "id": [
          "2",
          "4",
          "2"
        ],
        "title": "Page Titled",
        "description": "Web pages have titles that describe topic or purpose.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-title",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-title"
          },
          {
            "title": "Understanding 2.4.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html"
          }
        ]
      },
      "3": {
        "id": [
          "2",
          "4",
          "3"
        ],
        "title": "Focus Order",
        "description": "If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-focus-order"
          },
          {
            "title": "Understanding 2.4.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html"
          }
        ]
      },
      "4": {
        "id": [
          "2",
          "4",
          "4"
        ],
        "title": "Link Purpose (In Context)",
        "description": "The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.4",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-refs"
          },
          {
            "title": "Understanding 2.4.4",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html"
          }
        ]
      },
      "5": {
        "id": [
          "2",
          "4",
          "5"
        ],
        "title": "Multiple Ways",
        "description": "More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.5",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-mult-loc"
          },
          {
            "title": "Understanding 2.4.5",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html"
          }
        ]
      },
      "6": {
        "id": [
          "2",
          "4",
          "6"
        ],
        "title": "Headings and Labels",
        "description": "Headings and labels describe topic or purpose.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.6",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-descriptive"
          },
          {
            "title": "Understanding 2.4.6",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html"
          }
        ]
      },
      "7": {
        "id": [
          "2",
          "4",
          "7"
        ],
        "title": "Focus Visible",
        "description": "Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.7",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-focus-visible"
          },
          {
            "title": "Understanding 2.4.7",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html"
          }
        ]
      },
      "8": {
        "id": [
          "2",
          "4",
          "8"
        ],
        "title": "Location",
        "description": "Information about the user's location within a set of Web pages is available.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-location",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.8",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-location"
          },
          {
            "title": "Understanding 2.4.8",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-location.html"
          }
        ]
      },
      "9": {
        "id": [
          "2",
          "4",
          "9"
        ],
        "title": "Link Purpose (Link Only)",
        "description": "A mechanism is available to allow the purpose of each link to be identified from link text alone, except where the purpose of the link would be ambiguous to users in general.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-link",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 2.4.9",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-link"
          },
          {
            "title": "Understanding 2.4.9",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html"
          }
        ]
      },
      "10": {
        "id": [
          "2",
          "4",
          "10"
        ],
        "title": "Section Headings",
        "description": "Section headings are used to organize the content.",
        "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms-headings",
        "level": "AAA",
        "special_cases": null,
        "notes": [
          {
            "content": "'Heading' is used in its general sense and includes titles and other ways to add a heading to different types of content."
          },
          {
            "content": "This success criterion covers sections within writing, not user interface components. User Interface components are covered under Success Criterion 4.1.2. (http://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-rsv)"
          }
        ],
        "references": [
          {
            "title": "How to Meet 2.4.10",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-navigation-mechanisms-headings"
          },
          {
            "title": "Understanding 2.4.10",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html"
          }
        ]
      },
      "id": [
        "2",
        "4"
      ],
      "children": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "title": "Navigable",
      "description": "Provide ways to help users navigate, find content, and determine where they are.",
      "url": "https://www.w3.org/TR/WCAG20/#navigation-mechanisms",
      "references": [
        {
          "title": "Understanding Guideline 2.4",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms.html"
        }
      ]
    },
    "id": [
      "2"
    ],
    "children": [
      1,
      2,
      3,
      4
    ],
    "title": "Operable",
    "description": "User interface components and navigation must be operable.",
    "url": "https://www.w3.org/TR/WCAG20/#operable"
  },
  "3": {
    "1": {
      "1": {
        "id": [
          "3",
          "1",
          "1"
        ],
        "title": "Language of Page",
        "description": "The default human language of each Web page can be programmatically determined.",
        "url": "https://www.w3.org/TR/WCAG20/#meaning-doc-lang-id",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.1.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-doc-lang-id"
          },
          {
            "title": "Understanding 3.1.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html"
          }
        ]
      },
      "2": {
        "id": [
          "3",
          "1",
          "2"
        ],
        "title": "Language of Parts",
        "description": "The human language of each passage or phrase in the content can be programmatically determined except for proper names, technical terms, words of indeterminate language, and words or phrases that have become part of the vernacular of the immediately surrounding text.",
        "url": "https://www.w3.org/TR/WCAG20/#meaning-other-lang-id",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.1.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-other-lang-id"
          },
          {
            "title": "Understanding 3.1.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html"
          }
        ]
      },
      "3": {
        "id": [
          "3",
          "1",
          "3"
        ],
        "title": "Unusual Words",
        "description": "A mechanism is available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
        "url": "https://www.w3.org/TR/WCAG20/#meaning-idioms",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.1.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-idioms"
          },
          {
            "title": "Understanding 3.1.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-idioms.html"
          }
        ]
      },
      "4": {
        "id": [
          "3",
          "1",
          "4"
        ],
        "title": "Abbreviations",
        "description": "A mechanism for identifying the expanded form or meaning of abbreviations is available.",
        "url": "https://www.w3.org/TR/WCAG20/#meaning-located",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.1.4",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-located"
          },
          {
            "title": "Understanding 3.1.4",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-located.html"
          }
        ]
      },
      "5": {
        "id": [
          "3",
          "1",
          "5"
        ],
        "title": "Reading Level",
        "description": "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available.",
        "url": "https://www.w3.org/TR/WCAG20/#meaning-supplements",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.1.5",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-supplements"
          },
          {
            "title": "Understanding 3.1.5",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-supplements.html"
          }
        ]
      },
      "6": {
        "id": [
          "3",
          "1",
          "6"
        ],
        "title": "Pronunciation",
        "description": "A mechanism is available for identifying specific pronunciation of words where meaning of the words, in context, is ambiguous without knowing the pronunciation.",
        "url": "https://www.w3.org/TR/WCAG20/#meaning-pronunciation",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.1.6",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-meaning-pronunciation"
          },
          {
            "title": "Understanding 3.1.6",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-pronunciation.html"
          }
        ]
      },
      "id": [
        "3",
        "1"
      ],
      "children": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "title": "Readable",
      "description": "Make text content readable and understandable.",
      "url": "https://www.w3.org/TR/WCAG20/#meaning",
      "references": [
        {
          "title": "Understanding Guideline 3.1",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning.html"
        }
      ]
    },
    "2": {
      "1": {
        "id": [
          "3",
          "2",
          "1"
        ],
        "title": "On Focus",
        "description": "When any component receives focus, it does not initiate a change of context.",
        "url": "https://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.2.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-receive-focus"
          },
          {
            "title": "Understanding 3.2.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-receive-focus.html"
          }
        ]
      },
      "2": {
        "id": [
          "3",
          "2",
          "2"
        ],
        "title": "On Input",
        "description": "Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.",
        "url": "https://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.2.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-unpredictable-change"
          },
          {
            "title": "Understanding 3.2.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-unpredictable-change.html"
          }
        ]
      },
      "3": {
        "id": [
          "3",
          "2",
          "3"
        ],
        "title": "Consistent Navigation",
        "description": "Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
        "url": "https://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.2.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-consistent-locations"
          },
          {
            "title": "Understanding 3.2.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html"
          }
        ]
      },
      "4": {
        "id": [
          "3",
          "2",
          "4"
        ],
        "title": "Consistent Identification",
        "description": "Components that have the same functionality within a set of Web pages are identified consistently.",
        "url": "https://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.2.4",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-consistent-functionality"
          },
          {
            "title": "Understanding 3.2.4",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html"
          }
        ]
      },
      "5": {
        "id": [
          "3",
          "2",
          "5"
        ],
        "title": "Change on Request",
        "description": "Changes of context are initiated only by user request or a mechanism is available to turn off such changes.",
        "url": "https://www.w3.org/TR/WCAG20/#consistent-behavior-no-extreme-changes-context",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.2.5",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-consistent-behavior-no-extreme-changes-context"
          },
          {
            "title": "Understanding 3.2.5",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html"
          }
        ]
      },
      "id": [
        "3",
        "2"
      ],
      "children": [
        1,
        2,
        3,
        4,
        5
      ],
      "title": "Predictable",
      "description": "Make Web pages appear and operate in predictable ways.",
      "url": "https://www.w3.org/TR/WCAG20/#consistent-behavior",
      "references": [
        {
          "title": "Understanding Guideline 3.2",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior.html"
        }
      ]
    },
    "3": {
      "1": {
        "id": [
          "3",
          "3",
          "1"
        ],
        "title": "Error Identification",
        "description": "If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.",
        "url": "https://www.w3.org/TR/WCAG20/#minimize-error-identified",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.3.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-identified"
          },
          {
            "title": "Understanding 3.3.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"
          }
        ]
      },
      "2": {
        "id": [
          "3",
          "3",
          "2"
        ],
        "title": "Labels or Instructions",
        "description": "Labels or instructions are provided when content requires user input.",
        "url": "https://www.w3.org/TR/WCAG20/#minimize-error-cues",
        "level": "A",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.3.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-cues"
          },
          {
            "title": "Understanding 3.3.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"
          }
        ]
      },
      "3": {
        "id": [
          "3",
          "3",
          "3"
        ],
        "title": "Error Suggestion",
        "description": "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
        "url": "https://www.w3.org/TR/WCAG20/#minimize-error-suggestions",
        "level": "AA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.3.3",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-suggestions"
          },
          {
            "title": "Understanding 3.3.3",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"
          }
        ]
      },
      "4": {
        "id": [
          "3",
          "3",
          "4"
        ],
        "title": "Error Prevention (Legal, Financial, Data)",
        "description": " For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:",
        "url": "https://www.w3.org/TR/WCAG20/#minimize-error-reversible",
        "level": "AA",
        "special_cases": [
          {
            "type": "at_least_one",
            "title": "Reversible",
            "description": "Submissions are reversible."
          },
          {
            "type": "at_least_one",
            "title": "Checked",
            "description": "Data entered by the user is checked for input errors and the user is provided an opportunity to correct them."
          },
          {
            "type": "at_least_one",
            "title": "Confirmed",
            "description": "A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission."
          }
        ],
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.3.4",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-reversible"
          },
          {
            "title": "Understanding 3.3.4",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html"
          }
        ]
      },
      "5": {
        "id": [
          "3",
          "3",
          "5"
        ],
        "title": "Help",
        "description": "Context-sensitive help is available.",
        "url": "https://www.w3.org/TR/WCAG20/#minimize-error-context-help",
        "level": "AAA",
        "special_cases": null,
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.3.5",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-context-help"
          },
          {
            "title": "Understanding 3.3.5",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-context-help.html"
          }
        ]
      },
      "6": {
        "id": [
          "3",
          "3",
          "6"
        ],
        "title": "Error Prevention (All)",
        "description": "For Web pages that require the user to submit information, at least one of the following is true:",
        "url": "https://www.w3.org/TR/WCAG20/#minimize-error-reversible-all",
        "level": "AAA",
        "special_cases": [
          {
            "type": "at_least_one",
            "title": "Reversible",
            "description": "Submissions are reversible."
          },
          {
            "type": "at_least_one",
            "title": "Checked",
            "description": "Data entered by the user is checked for input errors and the user is provided an opportunity to correct them."
          },
          {
            "type": "at_least_one",
            "title": "Confirmed",
            "description": "A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission."
          }
        ],
        "notes": null,
        "references": [
          {
            "title": "How to Meet 3.3.6",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-minimize-error-reversible-all"
          },
          {
            "title": "Understanding 3.3.6",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible-all.html"
          }
        ]
      },
      "id": [
        "3",
        "3"
      ],
      "children": [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "title": "Input Assistance",
      "description": "Help users avoid and correct mistakes.",
      "url": "https://www.w3.org/TR/WCAG20/#minimize-error",
      "references": [
        {
          "title": "Understanding Guideline 3.3",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error.html"
        }
      ]
    },
    "id": [
      "3"
    ],
    "children": [
      1,
      2,
      3
    ],
    "title": "Understandable",
    "description": "Information and the operation of user interface must be understandable.",
    "url": "https://www.w3.org/TR/WCAG20/#understandable"
  },
  "4": {
    "1": {
      "1": {
        "id": [
          "4",
          "1",
          "1"
        ],
        "title": "Parsing",
        "description": "In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.",
        "url": "https://www.w3.org/TR/WCAG20/#ensure-compat-parses",
        "level": "A",
        "special_cases": null,
        "notes": [
          {
            "content": "Start and end tags that are missing a critical character in their formation, such as a closing angle bracket or a mismatched attribute value quotation mark are not complete."
          }
        ],
        "references": [
          {
            "title": "How to Meet 4.1.1",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-parses"
          },
          {
            "title": "Understanding 4.1.1",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html"
          }
        ]
      },
      "2": {
        "id": [
          "4",
          "1",
          "2"
        ],
        "title": "Name, Role, Value",
        "description": "For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.",
        "url": "https://www.w3.org/TR/WCAG20/#ensure-compat-rsv",
        "level": "A",
        "special_cases": null,
        "notes": [
          {
            "content": "This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification."
          }
        ],
        "references": [
          {
            "title": "How to Meet 4.1.2",
            "url": "http://www.w3.org/WAI/WCAG20/quickref/#qr-ensure-compat-rsv"
          },
          {
            "title": "Understanding 4.1.2",
            "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html"
          }
        ]
      },
      "id": [
        "4",
        "1"
      ],
      "children": [
        1,
        2
      ],
      "title": "Compatible",
      "description": "Maximize compatibility with current and future user agents, including assistive technologies.",
      "url": "https://www.w3.org/TR/WCAG20/#ensure-compat",
      "references": [
        {
          "title": "Understanding Guideline 4.1",
          "url": "http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat.html"
        }
      ]
    },
    "id": [
      "4"
    ],
    "children": [
      1
    ],
    "title": "Robust",
    "description": "Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.",
    "url": "https://www.w3.org/TR/WCAG20/#robust"
  }
} as WCAG;

export default WCAG