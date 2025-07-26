// docs/assets/js/render-math.js��������ӣ���
document.addEventListener("DOMContentLoaded", function () {
    renderMathInElement(document.body, {
        // ���幫ʽ�ָ�����$=���ڣ�$$=�鼶��
        delimiters: [
            { left: "$", right: "$", display: false },  // ���ڹ�ʽ����$E=mc^2$��
            { left: "$$", right: "$$", display: true }   // �鼶��ʽ����$$E=mc^2$$��
        ],
        throwOnError: false,  // ���Դ���ʽ������ҳ�������
        output: "html"         // ʹ��HTML��Ⱦ�����������������
    });
});