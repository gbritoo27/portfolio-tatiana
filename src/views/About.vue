<template>
  <div class="container">
    <div class="content">
      <div class="about">
        <p>
          Hi!
          <br />
          I am Tatiana, and I’m into graphic design. I’m currently studying at
          Faculdade de Belas-Artes of Universidade do Porto and taking a degree
          in Comunication Design.
          <br />
          I like things that are more inclined to, what I’d call, “alternative”
          but I really like simplicity and dynamism and tend to incoroporate
          those features into my work. I don’t know who I am yet or what my
          style is. But, I exist. And I rather show than tell. So I hope you
          enjoy my portfolio!
        </p>
      </div>
      <div class="contact">
        <a href="mailto:tatianacorreiadias@gmail.com">Get in touch!</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 0;
  display: flex;
  display: -webkit-flex;
  height: 78vh;

  .content {
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .about {
    width: 100%;
    max-width: 600px;
    margin: auto;

    p {
      font-size: 18px;
    }
  }

  .contact {
    margin-top: 40px;
  }
}
</style>
