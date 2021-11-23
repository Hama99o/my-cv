<template>
  <div>
    <b-list-group>
      <section id="conference-timeline">
       <div class="timeline-start" :class="bgnightmodeClass()">Start</div>
       <div class="conference-center-line" :class="bgnightmodeClass()"></div>
       <div class="conference-timeline-content">
         <div class="timeline-article">
           <div class="content-left-container">
             <div class="content-left rounded" :class="textAndBgSameClass()">
               <p :class="textClass()">High school diploma from Milat school</p>
             </div>
           </div>
           <div class="content-right-container">
             <div class="content-right rounded" :class="textAndBgSameClass()">
               <p :class="textClass()">Seller with an artisanal honey producer (international distribution) Sale to traders and individuals. </p>
             </div>
           </div>
           <div class="meta-start-year" :class="bgnightmodeClass()">
             <span class="start-year">2010</span>
             <span class="end-year">2015</span>
           </div>
         </div>
       </div>

       <div class="conference-timeline-content">
         <div class="timeline-article">
           <div class="content-left-container">
             <div class="content-left rounded" :class="textAndBgSameClass()">
               <p :class="textClass()">Tourist guide in Älvkungen Tourist boat: reception of tourist groups, guide and piloting of the boat. Vendor at Holmgardcykel, seller specializing in cycling</p>
             </div>
           </div>
           <div class="content-right-container">
             <div class="content-right rounded" :class="textAndBgSameClass()">
               <p :class="textClass()">Learning Swedish and web development at balder high school </p>
             </div>
           </div>
           <div class="meta-start-year" :class="bgnightmodeClass()">
             <span class="start-year">2015</span>
             <span class="end-year">2019</span>
           </div>
         </div>
       </div>

      <div class="conference-timeline-content">
        <div class="timeline-article">
          <div class="content-left-container">
            <div class="content-left rounded" :class="textAndBgSameClass()">
              <p :class="textClass()">Volunteer interpreter within the Scarabée association</p>
            </div>
          </div>
          <div class="content-right-container">
            <div class="content-right rounded" :class="textAndBgSameClass()">
              <p :class="textClass()">Preparation for Delf B1 (French language studies diploma) and Web development at Konexio Digistart. </p>
            </div>
          </div>
          <div class="meta-start-year" :class="bgnightmodeClass()">
            <span class="start-year">2019</span>
            <span class="end-year">2020</span>
          </div>
        </div>
      </div>

      <div class="conference-timeline-content">
        <div class="timeline-article">
          <div class="content-left-container">
            <div class="content-left rounded" :class="textAndBgSameClass()">
              <p :class="textClass()">Work at jam as a junior web developer</p>
            </div>
          </div>
          <div class="meta-start-year" :class="bgnightmodeClass()">
            <span class="start-year">2020 </span>
            <span class="end-year">Now</span>
          </div>
        </div>
      </div>
       <div class="timeline-end" :class="bgnightmodeClass()">End</div>
      </section>
    </b-list-group>
  </div>
</template>

<script>

export default {
  name: 'ExperienceAndEducation',
  props: ['nightmode'],
  methods: {
    bgnightmodeClass () {
      return this.nightmode ? 'bg-white  text-dark' : 'bg-dark text-white'
    },
    textAndBgClass () {
      return this.nightmode ? 'bg-white text-white' : 'bg-dark text-dark'
    },
    textClass () {
      return this.nightmode ? 'text-dark' : 'text-white'
    },
    textAndBgSameClass () {
      return this.nightmode ? 'bg-white text-white' : 'bg-dark text-dark'
    }
  }
}
</script>

<style scoped lang="scss">
#conference-timeline {
  position: relative;
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
}
#conference-timeline .timeline-start,
#conference-timeline .timeline-end {
  display: table;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  padding: 15px 23px;
  max-width: 5%;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
#conference-timeline .conference-center-line {
  position: absolute;
  width: 3px;
  height: 100%;
  top: 0;
  left: 50%;
  margin-left: -2px;
  z-index: -1;
}
#conference-timeline .conference-timeline-content {
  padding-top: 67px;
  padding-bottom: 27px;
}
.timeline-article {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}
.timeline-article .content-left-container,
.timeline-article .content-right-container {
  max-width: 44%;
  width: 100%;
}

.timeline-article .content-left,
.timeline-article .content-right {
  position: relative;
  width: auto;
  border: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);
  padding: 27px 25px;
}
.timeline-article p {
  margin: 0 0 0 20px;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  position: relative;
}

.timeline-article .content-left-container {
  float: left;
}
.timeline-article .content-right-container {
  float: right;
}
.timeline-article .content-left:before,
.timeline-article .content-right:before{
  position: absolute;
  top: 20px;
  font-size: 23px;
  font-family: "FontAwesome";
}
.timeline-article .content-left:before {
  content: "\f0da";
  right: -8px;
}
.timeline-article .content-right:before {
  content: "\f0d9";
  left: -8px;
}
.timeline-article .meta-start-year {
  position: absolute;
  top: 0;
  left: 50%;
  width: 62px;
  height: 62px;
  margin-left: -31px;
  border-radius: 100%;
}
.timeline-article .meta-start-year .start-year,
.timeline-article .meta-start-year .end-year {
  display: block;
  text-align: center;
  font-weight: 900;
}
.timeline-article .meta-start-year .start-year {
  font-size: 18px;
  line-height: 40px;
}
.timeline-article .meta-start-year .end-year {
  font-size: 18px;
  line-height: 5px;
}
/*===== // Vertical Timeline =====*/

/*===== Resonsive Vertical Timeline =====*/
@media only screen and (max-width: 830px) {
  #conference-timeline .timeline-start,
  #conference-timeline .timeline-end {
    margin: 0;
  }
  #conference-timeline .conference-center-line {
    margin-left: 0;
    left: 50px;
  }
  .timeline-article .meta-start-year {
    margin-left: 0;
    left: 20px;
  }
  .timeline-article .content-left-container,
  .timeline-article .content-right-container {
    max-width: 100%;
    width: auto;
    float: none;
    margin-left: 110px;
    min-height: 53px;
  }
  .timeline-article .content-left-container {
    margin-bottom: 20px;
  }
  .timeline-article .content-left,
  .timeline-article .content-right {
    padding: 10px 25px;
    min-height: 65px;
  }
  .timeline-article .content-left:before {
    content: "\f0d9";
    right: auto;
    left: -8px;
  }
  .timeline-article .content-right:before {
    display: none;
  }
}
@media only screen and (max-width: 400px) {
  .timeline-article p {
    margin: 0;
  }
  .timeline-article p span.article-number {
    display: none;
  }

}
/*===== // Resonsive Vertical Timeline =====*/
</style>
