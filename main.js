console.log("Processo principal")

const { app, BrowserWindow, nativeTheme, Menu } = require('electron')


// janela principal
let win
const createWindow = () => {
    // a linha baixo define o tema: claro ou escuro
    nativeTheme.themeSource = 'dark'
    win = new BrowserWindow({
    width: 800,
    height: 600,
    //esconde o menu
    //autoHideMenuBar: true,
    // botão minimizar sem aparecer na tela
    //minimizable: false,
    //mudar o tamanho esticando a tela
    resizable: false
  })

  // menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))


  win.loadFile('./src/views/index.html')
}
//FIM JANELA PRINCIPAL


// JANELA SOBRE
function aboutWindow(){
  nativeTheme.themeSource = 'dark'
  //  a linha abaixo obtem a janela principal
  const main = BrowserWindow.getFocusedWindow()
  let about
  // estabelecer uma relção hieraequica entre janelas

  if (main) {
    about = new BrowserWindow({
      width: 380,
      height: 220,
      autoHideMenuBar: true,
      resizable: false,
      minimizable: false,
      parent: main,
      modal: true

    })
  }
  //carregar o documento html da janela
  about.loadFile('./src/views/sobre.html')
}


// iniciar a aplicação

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'light') {
      app.quit()
    }
  })

  //reduzir logs não criticos
app.commandLine.appendSwitch('log-level', '3')


   //template do menu
   const template = [
    {
      label: 'Cadastro',
      submenu: [
        {
          label: 'Clientes'
        },
        {
          label: 'Os'
        },
        {
          label:'separator'
        },
        {
          label: 'Sair',
          click: () => app.quit(),
          accelerator: 'Alt+f4'

        }
      ]
    },

   {
    label:  'Relatórios'
   },

   {
    label:  'Ferramentas',
    submenu: [
      {
        label: 'Aplicar zoom',
        role: 'zoomIn'
      },
      {
        label: 'Reduzir',
        role: 'zoomOut'
      },
      {
        label: 'Restaurar o Zoom',
        role: 'resetZoom'
      },
      {
        type: 'separator'
      },
      {
        label: 'Recarregar',
        role: 'reload' 
      },
      {
        label: 'Ferramentas do desenvolvedor',
        role: 'toggleDevTools'
      }

    ]
   },
   {
    label:  'Ajuda',
    submenu: [
    {
      label: 'Sobre',
      click: () => aboutWindow()
     }
    ]
   }
    
 
    
     
    
  ]