//import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="mb-4 text-center">About Quiz</h1>

        <div className="card mb-4">
          <div className="card-header bg-primary text-white text-center">
            <h2 className="h5 mb-0">About Quiz</h2>
          </div>
          <div className="card-body">
            <p>
              The earliest known examples of the word date back to 1780; its
              etymology is unknown, but it may have originated in student slang.
              It initially meant an "odd, eccentric person" or a "joke, hoax".
              Later (perhaps by association with words such as "inquisitive"), it
              came to mean "to observe, study intently", and thence (from about
              the mid-19th century) "test, exam."
            </p>
            <p>
              There is a well-known myth about the word quiz that says that in
              1791, a Dublin theatre owner named Richard Daly made a bet that he
              could introduce a word into the language within 24 hours. He then
              went out and hired a group of street children to write the word
              "quiz", which was a nonsense word, on walls around the city of
              Dublin...
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-success text-white">
            <h2 className="h5 mb-0 text-center">World Records</h2>
          </div>
          <div className="card-body">
            <p>
              The largest quiz, according to Guinness, was the "Quiz for Life",
              held at the Flanders Expo Halls in Ghent, Belgium, on 11 December
              2010 with 2,280 participants. The winning team Café De Kastaar from
              Leuven consisted of Marnix Baes, Erik Derycke, Eric Hemelaers,
              Bart Permentier and Tom Trogh.
            </p>
          </div>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-info text-white text-center">
            <h2 className="h5 mb-0">Other Quizzes</h2>
          </div>
          <div className="card-body">
            <p>
              A personality quiz may be a series of multiple-choice questions
              about the respondent without right or wrong answers. The responses
              to these questions are tallied according to a key, and the result
              purports to reveal some quality of the respondent.
            </p>
            <p>
              These kinds of quizzes were originally popularized by magazines like
              Cosmopolitan and are now common on the Internet. Results are
              typically lighthearted and often not psychometrically valid, but
              they may encourage self-reflection or exploration of a topic.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
