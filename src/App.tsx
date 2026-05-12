import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'

const steps = ['اطلاعات ارسال', 'روش پرداخت', 'بررسی سفارش', 'تکمیل خرید']
const methods = ['پرداخت آنلاین', 'کارت به کارت', 'پرداخت در محل']
const theme = createTheme({
  direction: 'rtl',
  typography: { fontFamily: 'Vazirmatn, sans-serif' },
  palette: { primary: { main: '#0f766e' } },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': { outline: '3px solid #0f766e', outlineOffset: 2 },
        },
      },
    },
  },
})

function App() {
  const [activeStep, setActiveStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState(methods[0])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const goNext = () => {
    if (activeStep === 0) {
      const nextErrors: { [key: string]: string } = {}
      if (!name.trim()) nextErrors.name = 'لطفا نام را وارد کنید.'
      if (!/^09\d{9}$/.test(phone)) nextErrors.phone = 'شماره تماس معتبر نیست.'
      if (!address.trim()) nextErrors.address = 'آدرس ارسال را وارد کنید.'
      if (!/^\d{10}$/.test(postalCode)) nextErrors.postalCode = 'کد پستی باید ۱۰ رقمی باشد.'
      setErrors(nextErrors)
      if (Object.keys(nextErrors).length > 0) return
    }
    setErrors({})
    setActiveStep((s) => Math.min(s + 1, 3))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main dir="rtl">
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
              فرآیند پرداخت
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              مراحل خرید را قدم‌به‌قدم کامل کنید.
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <Box sx={{ display: 'grid', gap: 2 }}>
                <TextField label="نام و نام خانوادگی" placeholder="مثال: علی رضایی" value={name} onChange={(e) => setName(e.target.value)} error={!!errors.name} helperText={errors.name} fullWidth slotProps={{ htmlInput: { 'aria-label': 'نام و نام خانوادگی' } }} />
                <TextField label="شماره تماس" placeholder="۰۹۱۲۱۲۳۴۵۶۷" value={phone} onChange={(e) => setPhone(e.target.value)} error={!!errors.phone} helperText={errors.phone} fullWidth slotProps={{ htmlInput: { 'aria-label': 'شماره تماس' } }} />
                <TextField label="آدرس کامل" placeholder="شهر، خیابان، پلاک" multiline minRows={3} value={address} onChange={(e) => setAddress(e.target.value)} error={!!errors.address} helperText={errors.address} fullWidth slotProps={{ htmlInput: { 'aria-label': 'آدرس کامل' } }} />
                <TextField label="کد پستی" placeholder="۱۰ رقمی" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} error={!!errors.postalCode} helperText={errors.postalCode} fullWidth slotProps={{ htmlInput: { 'aria-label': 'کد پستی' } }} />
              </Box>
            )}

            {activeStep === 1 && (
              <Box sx={{ display: 'grid', gap: 2 }}>
                <Typography sx={{ fontWeight: 700 }}>روش پرداخت را انتخاب کنید</Typography>
                {methods.map((method) => (
                  <Card key={method} variant="outlined" sx={{ borderColor: paymentMethod === method ? 'primary.main' : 'divider' }}>
                    <CardActionArea onClick={() => setPaymentMethod(method)}>
                      <CardContent>
                        <Typography sx={{ fontWeight: 700 }}>{method}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {paymentMethod === method ? 'انتخاب شده' : 'برای انتخاب کلیک کنید'}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Box>
            )}

            {activeStep === 2 && (
              <Box sx={{ display: 'grid', gap: 3 }}>
                <Typography sx={{ fontWeight: 700 }}>بررسی نهایی سفارش</Typography>
                <Paper variant="outlined" sx={{ p: 2, borderRadius: 3 }}>
                  <Typography sx={{ mb: 1, fontWeight: 700 }}>خلاصه سفارش</Typography>
                  <List disablePadding>
                    <ListItem disableGutters>
                      <ListItemText primary="اشتراک حرفه‌ای ماهانه" secondary="۱ × ۸۹۰ هزار تومان" />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText primary="بسته افزونه امنیتی" secondary="۱ × ۲۲۰ هزار تومان" />
                    </ListItem>
                  </List>
                  <Divider sx={{ my: 1.5 }} />
                  <Typography sx={{ fontWeight: 800 }}>جمع کل: ۱,۱۱۰ هزار تومان</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    روش پرداخت انتخاب‌شده: {paymentMethod}
                  </Typography>
                </Paper>
              </Box>
            )}

            {activeStep === 3 && <Alert severity="success" sx={{ borderRadius: 3 }}>خرید با موفقیت تکمیل شد. اطلاعات سفارش برای شما ارسال می‌شود.</Alert>}

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" disabled={activeStep === 0} onClick={() => setActiveStep((s) => Math.max(s - 1, 0))}>مرحله قبل</Button>
              <Button variant="contained" onClick={goNext}>{activeStep === 3 ? 'پایان' : 'ادامه'}</Button>
            </Box>
          </Paper>
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default App
