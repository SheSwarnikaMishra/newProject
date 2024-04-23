import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import "./privacy.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
const Privacy = () => {
  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);
  return (
    <>
      <Navbar />
      <div style={{background:"white"}}>
        <div>
          <div
            className="container-fluid"
            style={{ paddingRight: "26px", paddingLeft: "26px" }}
          >
            <div className="row" style={{ paddingBottom: " 0px" }}>
              <div
                className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2"
                style={{ marginTop: " 20px" }}
              >
                <div className="intro"></div>
                <div className="text">
                  <p
                    className="text-start"
                    data-aos="fade-up"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      lineHeight: "20px",
                      fontSize: " 14px",
                      padding:"4% 17% 0 17%",
                    }}
                  >
                    <div style={{fontFamily: "Montserrat, sans-serif"}}>

                    <strong>TERMS OF</strong>&nbsp;<strong>USE</strong
                ><br /><br /><strong>Last updated&nbsp;May 07, 2022</strong
                ><br /><br />The Minus Zero website located at
                <a href="https://minuszero.in">https://minuszero.in</a> is a
                copyrighted&nbsp;work belonging to
                <strong>Minus Zero Robotics Private Limited</strong>. Certain
                features of the Site may be subject to additional guidelines,
                terms, or rules, which will be posted on the Site in connection
                with such features.<br /><br />These Terms of Use constitute a
                legally binding agreement made between you, whether personally
                or on behalf of an entity (“you”) and&nbsp;<strong
                  >Minus Zero Robotics Private Limited</strong
                >, doing business as&nbsp;Minus Zero&nbsp;("<strong
                  >Minus Zero</strong
                >," “<strong>Company</strong>,” “<strong>we</strong>,"
                “<strong>us</strong>," or “<strong>our</strong>”), concerning
                your access to and use of the&nbsp;<a
                  href="https://minuszero.in/"
                  target="_blank"
                  >https://minuszero.in</a
                >&nbsp;website as well as any other media form, media channel,
                mobile website or mobile application related, linked, or
                otherwise connected thereto (collectively, the “Site”).&nbsp;We
                are registered in&nbsp;India&nbsp;and have our registered office
                at&nbsp;No. 29, 6th Floor, Mahalaxmi Chambers,&nbsp;M.G.
                Road,&nbsp;Bengaluru,&nbsp;Karnataka&nbsp;560001.<br /><br />You
                agree that by accessing the Site, you have read, understood, and
                agreed to be bound by all of these Terms of Use.
                <strong
                  >IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU
                  ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST
                  DISCONTINUE USE IMMEDIATELY.</strong
                ><br /><br />Supplemental terms and conditions or documents that
                may be posted on the Site from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Terms
                of Use&nbsp;from time to time. We will alert you about any
                changes by updating the “Last updated” date of these Terms of
                Use, and you waive any right to receive specific notice of each
                such change. Please ensure that you check the applicable Terms
                every time you use our Site so that you understand which Terms
                apply. You will be subject to, and will be deemed to have been
                made aware of and to have accepted, the changes in any revised
                Terms of Use by your continued use of the Site after the date<br />such
                revised Terms of Use are posted.&nbsp;<br /><br />The
                information provided on the Site is not intended for
                distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Accordingly, those persons who choose to access the Site from
                other locations do so on their own initiative and are solely
                responsible for compliance with local laws, if and to the extent
                local laws are applicable.<br /><br />The Site is not tailored
                to comply with industry-specific regulations (Health Insurance
                Portability and Accountability Act (HIPAA), Federal Information
                Security Management Act (FISMA), etc.), so if your interactions
                would be subjected to such laws, you may not use this Site. You
                may not use the Site in a way that would violate the
                Gramm-Leach-Bliley Act (GLBA).<br /><br />The Site is intended
                for users who are at least 18 years old. Persons under the age
                of 18 are not permitted to use or register for the Site.<strong
                > </strong><br /><br /><strong>Subject to these Terms.</strong
                >&nbsp;Company grants you a non-transferable, non-exclusive,
                revocable, limited license to access the Site solely for your
                own personal, non-commercial use.<br /><br /><strong
                  >Certain Restrictions.</strong
                >&nbsp;The rights approved to you in these Terms are subject to
                the following restrictions: (a) you shall not sell, rent, lease,
                transfer, assign, distribute, host, or otherwise commercially
                exploit the Site; (b) you shall not change, make derivative
                works of, disassemble, reverse compile or reverse engineer any
                part of the Site; (c) you shall not access the Site in order to
                build a similar or competitive website; and (d) except as
                expressly stated herein, no part of the Site may be copied,
                reproduced, distributed, republished, downloaded, displayed,
                posted or transmitted in any form or by any means unless
                otherwise indicated, any future release, update, or other
                addition to functionality of the Site shall be subject to these
                Terms.&nbsp; All copyright and other proprietary notices on the
                Site must be retained on all copies thereof.<br /><br />Company
                reserves the right to change, suspend, or cease the Site with or
                without notice to you.&nbsp; You approve that Company will not
                be held liable to you or any third-party for any change,
                interruption, or termination of the Site or any part.<br /><br /><strong
                  >No Support or Maintenance.</strong
                >&nbsp;You agree that Company will have no obligation to provide
                you with any support in connection<br />with the Site.<br /><br />Unless
                otherwise indicated, the Site is our proprietary property and
                all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the “Content”) and the trademarks, service
                marks, and logos contained therein (the “Marks”) are&nbsp;owned
                or controlled by us or licensed to us, and are protected by
                copyright and trademark laws and various other intellectual
                property rights and unfair competition laws of the India,
                international copyright laws, and international conventions. The
                Content and the Marks are provided on the Site “AS IS” for<br />your
                information and personal use only. Except as expressly provided
                in these Terms of Use, no part of the Site and no Content or
                Marks may be copied, reproduced, aggregated, republished,
                uploaded, posted, publicly displayed, encoded, translated,
                transmitted, distributed, sold, licensed, or otherwise exploited
                for any commercial purpose whatsoever, without our express prior
                written permission. Company and its suppliers reserve all rights
                not granted in these Terms. We reserve all rights not expressly
                granted to you in and to the Site, the Content and the Marks.<br /><br /><strong
                  >Third-Party Links &amp; Ads.</strong
                >&nbsp;The Site may contain links to third-party websites and
                services, and/or display advertisements for<br />third-parties.&nbsp;
                Such Third-Party Links &amp; Ads are not under the control of
                Company, and Company is not responsible for any Third-Party
                Links &amp; Ads.&nbsp; Company provides access to these
                Third-Party Links &amp; Ads only as a convenience to you, and
                does not review, approve, monitor, endorse, warrant, or make any
                representations with respect to Third-Party Links &amp;
                Ads.&nbsp; You use all Third-Party Links &amp; Ads at your own
                risk, and should apply a suitable level of caution and
                discretion in doing so. When you click on any of the Third-Party
                Links &amp; Ads, the applicable third party’s terms and policies
                apply, including the third party’s privacy and data gathering
                practices.<br /><br /><strong>DISCLAIMERS</strong
                ><br /><br />You hereby release and forever discharge the
                Company and our officers, employees, agents, successors, and
                assigns from, and hereby waive and relinquish, each and every
                past, present and future dispute, claim, controversy, demand,
                right, obligation, liability, action and cause of action of
                every kind and nature, that has arisen or arises directly or
                indirectly out of, or that relates directly or indirectly to,
                the Site or information present herein.<br /><br />The site is
                provided on an "as-is" and "as available" basis, and company and
                our suppliers expressly disclaim any and all warranties and
                conditions of any kind, whether express, implied, or statutory,
                including all warranties or conditions of merchantability,
                fitness for a particular purpose, title, quiet enjoyment,
                accuracy, or non-infringement.&nbsp; We and our suppliers make
                not guarantee that the site will meet your requirements, will be
                available on an uninterrupted, timely, secure, or error-free
                basis, or will be accurate, reliable, free of viruses or other
                harmful code, complete, legal, or safe.<br /><br />We reserve
                the right to change, modify, or remove the contents of the Site
                at any time or for any reason at our sole discretion without
                notice. However, we have no obligation to update any information
                on our Site. We also reserve the right to modify or discontinue
                all or part of the Site without notice at any time. We will not
                be liable to you or any third party for any modification, price
                change, suspension, or discontinuance of the Site.<br /><br />We
                cannot guarantee the Site will be available at all times. We may
                experience hardware, software, or other problems or need to
                perform maintenance related to the Site, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Site at any time or for any reason without notice to
                you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Site during any downtime or discontinuance of
                the Site. Nothing in these Terms of Use will be construed to
                obligate us to maintain and support the Site or to supply any
                corrections, updates, or releases in connection therewith.<br /><br />There
                may be information on the Site that contains typographical
                errors, inaccuracies, or omissions, including descriptions,
                pricing, availability, and various other information. We reserve
                the right to correct any errors, inaccuracies, or omissions and
                to change or update the information on the Site at any time,
                without prior notice.<br /><br /><strong
                  >Limitation on Liability.&nbsp;</strong
                >To the maximum extent permitted by law, in no event shall
                company or our suppliers be liable to you or any third-party for
                any lost profits, lost data, costs of procurement of substitute
                products, or any indirect, consequential, exemplary, incidental,
                special or punitive damages arising from or relating to these
                terms or your use of, or incapability to use the site even if
                company has been advised of the possibility of such
                damages.&nbsp; Access to and use of the site is at your own
                discretion and risk, and you will be solely responsible for any
                damage to your device or computer system, or loss of data
                resulting therefrom. You agree that Company will have no
                liability of any kind arising from or relating to this
                agreement.<br /><br /><strong>Term and Termination.</strong
                >&nbsp;Subject to this Section, these Terms will remain in full
                force and effect while you use the Site.&nbsp; We may suspend or
                terminate your rights to use the Site at any time for any reason
                at our sole discretion, including for any use of the Site in
                violation of these Terms.&nbsp; Upon termination of your rights
                under these Terms, your Account and right to access and use the
                Site will terminate immediately.&nbsp;Company will not have any
                liability whatsoever to you for any termination of your rights
                under these Terms.<br /><br /><strong>Copyright Policy.</strong
                ><br /><br />Company respects the intellectual property of
                others and asks that users of our Site do the same.&nbsp; In
                connection with our Site, we have adopted and implemented a
                policy respecting copyright law that provides for the removal of
                any infringing materials.<br /><br /><strong>General.</strong
                ><br /><br />These Terms are subject to occasional revision, and
                if we make any substantial changes, we may notify you by posting
                notice of the changes on our Site.&nbsp; Continued use of our
                Site following notice of such changes shall indicate your
                acknowledgement of such changes and agreement to be bound by the
                terms and conditions of such changes. <br /><br /><strong
                  >Entire Terms.</strong
                >&nbsp;These Terms constitute the entire agreement between you
                and us regarding the use of the Site. Our failure to exercise or
                enforce any right or provision of these Terms shall not operate
                as a waiver of such right or provision. The section titles in
                these Terms are for convenience only and have no legal or
                contractual effect. The word "including" means "including
                without limitation". If any provision of these Terms is held to
                be invalid or unenforceable, the other provisions of these Terms
                will be unimpaired and the invalid or unenforceable provision
                will be deemed modified so that it is valid and enforceable to
                the maximum extent permitted by law.&nbsp; These Terms, and your
                rights and obligations herein, may not be assigned,
                subcontracted, delegated, or otherwise transferred by you
                without Company’s prior written consent, and any attempted<br />assignment,
                subcontract, delegation, or transfer in violation of the
                foregoing will be null and void.&nbsp; Company may freely assign
                these Terms.&nbsp; The terms and conditions set forth in these
                Terms shall be binding upon assignees.<br /><br /><strong
                  >Your Privacy.</strong
                >&nbsp;Please read our Privacy Policy.<br /><br /><strong
                  >Copyright/Trademark Information.</strong
                >&nbsp;Copyright ©. All rights reserved.&nbsp; All trademarks,
                logos and service marks displayed on the<br />Site are our
                property or the property of other third-parties. You are not
                permitted to use these Marks without our prior written consent
                or the consent of such third party which may own the Marks.<br /><br /><strong
                  >Indemnification.</strong
                >&nbsp;You agree to defend, indemnify, and hold us harmless,
                including our subsidiaries, affiliates, and all of our
                respective officers, agents, partners, and employees, from and
                against any loss, damage, liability, claim, or demand, including
                reasonable attorneys’ fees and expenses, made by any third party
                due to or arising out of:&nbsp;(1) use of the Site; (2) breach
                of these Terms of Use; (3) any breach of your representations
                and warranties set forth in these Terms of Use; (4) your
                violation of the rights of a third party, including but not
                limited to intellectual property rights; or (5) any overt
                harmful act toward any other user of the Site with whom you
                connected via the Site. Notwithstanding the foregoing, we
                reserve the right, at your expense, to assume the exclusive
                defense and control of any matter for which you are required to
                indemnify us, and you agree to cooperate, at your expense, with
                our defense of such claims. We will use reasonable efforts to
                notify you of any such claim, action, or proceeding which is
                subject to this indemnification upon becoming aware of it.<br /><br /><strong
                  >Miscellaneous.</strong
                >&nbsp;These Terms of Use and any policies or operating rules
                posted by us on the Site or in respect to the Site constitute
                the entire agreement and understanding between you and us. Our
                failure to exercise or enforce any right or provision of these
                Terms of Use shall not operate as a waiver of such right or
                provision. These Terms of Use operate to the fullest extent
                permissible by law. We may assign any or all of our rights and
                obligations to others at any time. We shall not be responsible
                or liable for any loss, damage, delay, or failure to act caused
                by any cause beyond our reasonable control. If any provision or
                part of a provision of these Terms of Use is determined to be
                unlawful, void, or unenforceable, that provision or part of the
                provision is deemed severable from these Terms of Use and does
                not affect the validity and enforceability of any remaining
                provisions. There is no joint venture, partnership, employment
                or agency relationship created between you and us as a result of
                these Terms of Use or use of the Site. You agree that these
                Terms of Use will not be construed against us by virtue of
                having drafted them. You hereby waive any and all defenses you
                may have based on the electronic form of these Terms of Use and
                the lack of signing by the parties hereto to execute these Terms
                of Use.<br /><br /><strong>Dispute Resolution.</strong
                >&nbsp;<br /><br />To expedite resolution and control the cost
                of any dispute, controversy, or claim related to these Terms of
                Use (each "Dispute" and collectively, the “Disputes”) brought by
                either you or us (individually, a “Party” and collectively, the
                “Parties”), the Parties agree to first attempt to negotiate any
                Dispute (except those Disputes expressly provided below)
                informally for at least&nbsp;thirty (30)&nbsp;days before
                initiating arbitration. Such informal negotiations commence upon
                written notice from one Party to the other Party.<br /><br />Any
                dispute arising out of or in connection with this contract,
                including any question regarding its existence, validity, or
                termination, shall be referred to and finally resolved by the
                Indian Arbitration and Conciliation Act, 1996. The number of
                arbitrators shall be&nbsp;one (1). The seat, or legal place, of
                arbitration shall be&nbsp;Bengaluru,&nbsp;India.&nbsp;The
                language of the proceedings shall be&nbsp;English.&nbsp;The
                governing law of the contract shall be the substantive law
                of&nbsp;India.<br /><br />The Parties agree that any arbitration
                shall be limited to the Dispute between the Parties
                individually. To the full extent permitted by law, (a) no
                arbitration shall be joined with any other proceeding; (b) there
                is no right or authority for any Dispute to be arbitrated on a
                class-action basis or to utilize class action procedures; and
                (c) there is no right or authority for any Dispute to be brought
                in a purported representative capacity on behalf of the general
                public or any other persons.<br /><br />The Parties agree that
                the following Disputes are not subject to the above provisions
                concerning informal negotiations and binding arbitration: (a)
                any Disputes seeking to enforce or protect, or concerning the
                validity of, any of the intellectual property rights of a Party;
                (b) any Dispute related to, or arising from, allegations of
                theft, piracy, invasion of privacy, or unauthorized use;<br />and
                (c) any claim for injunctive relief. If this provision is found
                to be illegal or unenforceable, then neither Party will elect to
                arbitrate any Dispute falling within that portion of this
                provision found to be illegal or unenforceable and such Dispute
                shall be decided by a court of Bengaluru, and the Parties agree
                to submit to the personal jurisdiction of that court.<br /><br /><strong
                  >Contact Information</strong
                ><br /><br />If you have questions or comments about this
                notice, you may&nbsp;email us at&nbsp;<a
                  href="mailto:team@minuszero.in"
                  >team@minuszero.in</a
                >&nbsp;or by post to:<br /><br />Minus Zero Robotics Private
                Limited<br />3rd Floor, 240/A, 27th Main, 2nd Sector,<br />HSR
                Layout, Bengaluru, India - 560102<br />
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="row justify-content-center align-items-center"
              data-aos="flip-up"
              data-aos-duration="400"
              style={{ paddingBottom: "40px" }}
            >
              <div className="col-auto col-sm-12 col-md-7 col-lg-10 col-xl-8 col-xxl-8 offset-xl-0 offset-xxl-0 align-self-start">
                <a href="https://www.linkedin.com/in/gagandeepreehal/"></a>
                <a
                  href="mailto:ceo@minuszero.in"
                  style={{ color: "rgb(160, 157, 155)" }}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{background:"black"}}>

      <Footer/>
      </div>
    </>
  );
};

export default Privacy;
