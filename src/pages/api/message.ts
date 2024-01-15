import nodemailer from 'nodemailer';

export async function POST({params, request}) {
  const { nickname, mobile, message } = await request.json();

  if (!nickname || !mobile || !message) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 },
    );
  }
  const configOptions = {
    service: "QQ",
    auth: {
        user: '408730591@qq.com',
        pass: 'kvinbepfnjaebjgf'
    }
  };

  const transporter = nodemailer.createTransport(configOptions);
  const mail = {
    from: `"web"<408730591@qq.com>`,
    subject: '激活验证码',
    to: 'blue0125@gmail.com',
    html: `
      <div>
        <p>
          昵称：${nickname}
        </p>
        <p>
          电话：${mobile}
        </p>
        <p>
          留言：${message}
        </p>
      </div>
    `,
  }
  transporter.sendMail(mail, function(error, info) {
    if (error) {
      return console.log(error);
    }
    transporter.close()
    console.log('mail sent:', info.response);
    return new Response(
      JSON.stringify({
        message: "Success!"
      }),
      { status: 200 },
    );
  });
}
